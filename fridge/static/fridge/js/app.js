const DB_NAME = 'freego_db';
const DB_VERSION = 8;
let DB;
// const SERVER_URL = "https://freego.srvz-webapp.he-arc.ch"
const SERVER_URL = "http://127.0.0.1:8000"

var appFridges = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app-base',
    data: () => ({
        db: null,
        fridges: [],
        favorites: [],
        notifications: [],
        ready: false,

        //map
        selectedFeatures: [],
        zoom: 15,
        center: [7.6451, 47.5227],
        rotation: 0,
        geolocPosition: undefined,
    }),
    async created() {
        await this.login();
        this.db = await this.getDb();

        this.fridges = await this.getFridgesFromDb();
        this.favorites = await this.getFavoritesFromDb();
        this.notifications = await this.getNotificationsFromDb();

        if (navigator.onLine) {
            this.getFridgesFromNetwork();

            if (this.isAuthenticated()) {
                this.getFavoritesFromNetwork();
                this.getNotificationsFromNetwork();
            }
        }

        this.ready = true;
    },
    methods: {
        async getDb() {
            if (!('indexedDB' in window)) {
                console.error('This browser doesn\'t support IndexedDB');
                return;
            }

            return new Promise((resolve, reject) => {
                if (DB) { return resolve(DB); }
                let request = window.indexedDB.open(DB_NAME, DB_VERSION);

                request.onerror = e => {
                    console.error('Error opening db', e);
                    reject('Error');
                };

                request.onsuccess = e => {
                    DB = e.target.result;
                    resolve(DB);
                };

                request.onupgradeneeded = e => {
                    let db = e.target.result;

                    if (e.oldVersion < 7) {
                        db.createObjectStore('fridges', { autoIncrement: true, keyPath: 'pk' });
                        db.createObjectStore("favorites", { autoIncrement: true, keyPath: 'pk' });
                    }
                    if (e.oldVersion < 8) {
                        db.createObjectStore("notifications", { autoIncrement: true, keyPath: 'pk' });
                    }

                };
            });
        },
        async login() {
            if (typeof token != "undefined" && token != "") {
                localStorage.setItem('token', token);
            }
        },
        async logout() {
            localStorage.clear();
            return true;
        },
        async getFridgesFromDb() {
            return new Promise((resolve, reject) => {
                let trans = this.db.transaction(['fridges'], 'readonly');
                trans.oncomplete = e => {
                    resolve(fridges);
                };
                let store = trans.objectStore('fridges');
                let fridges = [];

                store.openCursor().onsuccess = event => {
                    let cursor = event.target.result;
                    if (cursor) {
                        cursor.value['reference'] = "/food/" + cursor.value.id + "/list"
                        fridges.push(cursor.value);
                        cursor.continue();
                    }
                };
            });
        },
        async getFridgesFromNetwork() {
            let api_url = SERVER_URL + "/api/fridges";
            axios
                .get(api_url)
                .then(response => {
                    return new Promise((resolve, reject) => {
                        var tx = this.db.transaction('fridges', 'readwrite');
                        var store = tx.objectStore('fridges');

                        if (Array.isArray(response.data)) {
                            store.clear();
                            this.fridges = response.data;
                        }

                        return Promise.all(this.fridges.map(function (item) {
                            return store.add(item);
                        })).catch(function (e) {
                            console.log("ABORT");
                            tx.abort();
                        });
                    });
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async getNotificationsFromNetwork() {
            const payload = {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            }
            let api_url = SERVER_URL + "/api/notifications/by_user/";
            axios
                .get(api_url, payload)
                .then(response => {
                    this.notifications = response.data;
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async getNotificationsFromDb() {
            return new Promise(resolve => {
                let trans = this.db.transaction(['notifications'], 'readonly');
                trans.oncomplete = e => {
                    resolve(notifications);
                };
                let store = trans.objectStore('notifications');
                let notifications = [];

                store.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        notifications.push(cursor.value);
                        cursor.continue();
                    }
                };
            });
        },
        async getFavoritesFromDb() {
            return new Promise(resolve => {
                var trans = this.db.transaction(['favorites'], 'readonly');
                trans.oncomplete = e => {
                    resolve(favorites);
                };
                var store = trans.objectStore('favorites');
                let favorites = [];

                store.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        cursor.value['reference'] = "/food/" + cursor.value.id + "/list"
                        favorites.push(cursor.value);
                        cursor.continue();
                    }
                };
            });
        },
        async getFavoritesFromNetwork() {
            let db = await this.getDb();

            const payload = {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            }
            let api_url = SERVER_URL + "/api/fridges/favorites";
            axios
                .get(api_url, payload)
                .then(response => {
                    return new Promise((resolve, reject) => {
                        var tx = db.transaction('favorites', 'readwrite');
                        var store = tx.objectStore('favorites');

                        if (Array.isArray(response.data)) {
                            store.clear();
                            this.favorites = response.data;
                        } // clear old datas

                        store.clear(); // clear old datas

                        return Promise.all(response.data.map(function (item) {
                            return store.add(item);
                        })).catch(function (e) {
                            tx.abort();
                        });

                    });
                })
                .catch(err => {
                    console.error(err);
                })
        },
        clickOnFridge: function (evt) {
            evt.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                window.location.href = SERVER_URL + '/food/' + feature.getId() + "/list";
            })
        },
        isAuthenticated: function () {
            return localStorage.hasOwnProperty("token");
        }

    }
});