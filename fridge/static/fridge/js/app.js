var idbApp = (function () {
    'use strict';

    if (!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');
        return;
    }

    var dbPromise = idb.open('freego_db', 5, function (upgradeDb) {
        switch (upgradeDb.oldVersion) {
            case 0:
            // a placeholder case so that the switch block will 
            // execute when the database is first created
            // (oldVersion is 0)
            case 1:
                console.log('Creating the fridges object store');
                upgradeDb.createObjectStore('fridges', { keyPath: 'pk' });
                addFridgesFromNetwork();

            case 2:
                console.log('Creating the foods object store');
                upgradeDb.createObjectStore('foods', { keyPath: 'pk' });
                addFoodsFromNetwork();

            case 3:
                console.log('Creating fridge index in foods');
                var store = upgradeDb.transaction.objectStore('foods');
                store.createIndex('fridge', 'fields.fridge');
        }
    });

    // Fridges 
    function addFridgesFromNetwork() {
        return fetch('/forecast/get-fridges-data').then(function (response) {
            return response.json();
        }).then(function (jsondata) {
            return dbPromise.then(function (db) {
                var tx = db.transaction('fridges', 'readwrite');
                var store = tx.objectStore('fridges');
                store.clear(); // clear old datas
                return Promise.all(jsondata.map(function (item) {
                    console.log('Adding item: ', item);
                    return store.add(item);
                })).catch(function (e) {
                    tx.abort();
                    console.log(e);
                }).then(function () {
                    return store.openCursor();
                });
            });
        });
    }

    function getFridges() {
        addFridgesFromNetwork();
        return dbPromise.then(function (db) {
            var tx = db.transaction('fridges', 'readonly');
            var store = tx.objectStore('fridges');
            return store.openCursor();
        })
    }

    function displayFridges() {
        getFridges().then(function showRange(cursor) {
            if (!cursor) { return; }
            console.log('Cursored at:', cursor.value.name);
            for (var field in cursor.value) {
                if (field == 'fields') {
                    const card = document.getElementById('fridge-template').cloneNode(true);
                    var fridgesData = cursor.value[field];

                    for (var key in fridgesData) {
                        if (key == 'name') {
                            card.querySelector('#name').textContent = fridgesData[key];
                        }
                        if (key == 'address') {
                            card.querySelector('#address').textContent = fridgesData[key];
                        }
                        if (key == 'image') {
                            card.querySelector('#image').src = "/media/" + fridgesData[key];
                        }

                    }
                    card.querySelector('#reference').href = "/food/" + cursor.key + "/list"; // TODO find better solution
                    document.querySelector('#main').appendChild(card);
                    card.removeAttribute('hidden');
                }
            }
            return cursor.continue().then(showRange);
        });
        addFridgesFromNetwork().then(function showRange(cursor) {
            if (!cursor) { return; }
            console.log('Cursored at:', cursor.value.name);
            for (var field in cursor.value) {
                if (field == 'fields') {
                    const card = document.getElementById('fridge-template').cloneNode(true);
                    var fridgesData = cursor.value[field];

                    for (var key in fridgesData) {
                        if (key == 'name') {
                            card.querySelector('#name').textContent = fridgesData[key];
                        }
                        if (key == 'address') {
                            card.querySelector('#address').textContent = fridgesData[key];
                        }
                        if (key == 'image') {
                            card.querySelector('#image').src = "/media/" + fridgesData[key];
                        }

                    }
                    card.querySelector('#reference').href = "/food/" + cursor.key + "/list"; // TODO find better solution
                    document.querySelector('#main').appendChild(card);
                    card.removeAttribute('hidden');
                }
            }
            return cursor.continue().then(showRange);
        });
    }

    // Foods
    function addFoodsFromNetwork() {
        fetch('/forecast/get-foods-data').then(function (response) {
            return response.json();
        }).then(function (jsondata) {
            dbPromise.then(function (db) {
                var tx = db.transaction('foods', 'readwrite');
                var store = tx.objectStore('foods');
                return Promise.all(jsondata.map(function (item) {
                    console.log('Adding item: ', item);
                    return store.add(item);
                })).catch(function (e) {
                    tx.abort();
                    console.log(e);
                }).then(function () {
                    console.log('All items added successfully');
                });
            });
        });
    }

    function getFoodsByFridge(key) {
        return dbPromise.then(function (db) {
            var tx = db.transaction('foods', 'readonly');
            var store = tx.objectStore('foods');
            var index = store.index('fridge');
            var food = index.get(key);

            return food
        });
    }

    function displayFoodsByFridge() {
        var key = 1;

        getFoodsByFridge(key).then(function (object) {
            if (!object) { return; }
            const card = document.getElementById('food-detail').cloneNode(true);
            var foodsData = object['fields'];
            for (var key in foodsData) {
                if (key == "name") {
                    card.querySelector('#food-name').textContent = foodsData[key];
                }
                else if (key == "vegetarian" && foodsData["vegetarian"] == true) {
                    card.querySelector('#food-vegetarian').removeAttribute('hidden');
                }
                else if (key == "vegan" && foodsData["vegan"] == true) {
                    card.querySelector('#food-vegan').removeAttribute('hidden');
                }
                else if (key == "expiration_date") {
                    card.querySelector('#food-expiration-date').textContent = foodsData[key];
                }
            }
            // TODO add reservations
            document.querySelector('#main').appendChild(card);
            card.removeAttribute('hidden');
        });
    }

    return {
        dbPromise: (dbPromise),
        addFridgesFromNetwork: (addFridgesFromNetwork),
        displayFridges: (displayFridges),
        getFoodsByFridge: (getFoodsByFridge),
        displayFoodsByFridge: (displayFoodsByFridge)
    };
})();