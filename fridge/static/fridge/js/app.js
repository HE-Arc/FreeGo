var idbApp = (function () {
    'use strict';

    if (!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');
        return;
    }

    var dbPromise = idb.open('freego_db', 4, function (upgradeDb) {
        switch (upgradeDb.oldVersion) {
            case 0:
            // a placeholder case so that the switch block will 
            // execute when the database is first created
            // (oldVersion is 0)
            case 1:
                console.log('Creating the fridges object store');
                upgradeDb.createObjectStore('fridges', { keyPath: 'pk' });
                getFridges();
        }
    });

    function getFridges() {
        fetch('/getdata').then(function (response) {
            return response.json();
        }).then(function (jsondata) {
            dbPromise.then(function (db) {
                var tx = db.transaction('fridges', 'readwrite');
                var store = tx.objectStore('fridges');
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

    function displayFridges() {
        dbPromise.then(function (db) {
            var tx = db.transaction('fridges', 'readonly');
            var store = tx.objectStore('fridges');
            return store.openCursor();
        }).then(function showRange(cursor) {
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

    return {
        dbPromise: (dbPromise),
        getFridges: (getFridges),
        displayFridges: (displayFridges)
    };
})();