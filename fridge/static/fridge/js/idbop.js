var dbPromise = idb.open('freego_db', 5, function (upgradeDb) {
    upgradeDb.createObjectStore('fridges', { keyPath: 'pk' });
});

fetch('/getdata').then(function (response) {
    return response.json();
}).then(function (jsondata) {
    dbPromise.then(function (db) {
        var tx = db.transaction('fridges', 'readwrite');
        var fridgesStore = tx.objectStore('fridges');
        for (var key in jsondata) {
            if (jsondata.hasOwnProperty(key)) {
                fridgesStore.put(jsondata[key]);
            }
        }
    });
});

var post = "";
dbPromise.then(function (db) {
    var tx = db.transaction('fridges', 'readonly');
    var fridgesStore = tx.objectStore('fridges');
    return fridgesStore.openCursor();
}).then(function logItems(cursor) {
    if (!cursor) {
        return;
    }
    for (var field in cursor.value) {
        if (field == 'fields') {
            const card = document.getElementById('fridge-template').cloneNode(true);
            console.log(card);
            fridgesData = cursor.value[field];
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
            document.querySelector('#main').appendChild(card);
            card.removeAttribute('hidden');
        }
    }
    return cursor.continue().then(logItems);
});