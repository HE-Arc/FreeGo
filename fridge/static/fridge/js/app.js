const DB_NAME = 'freego_db';
const DB_VERSION = 2;
let DB;

var appFridges = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app-base',
    data: () => ({
        db: null,
        fridges: [],
        favorites: [],
        notifications: [],
        unread_notifications: []
    }),
    async created() {
        await this.login();
        await this.getNotifications();
        this.db = await this.getDb();

        this.getFridgesFromDb();
        this.getFarvoritesFromDb();

        if (navigator.onLine) {
            this.getFridgesFromNetwork();
            this.getFarvoritesFromNetwork();
        }
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
                    db.createObjectStore('fridges', { autoIncrement: true, keyPath: 'pk' });
                    db.createObjectStore("favorites", { autoIncrement: true, keyPath: 'pk' });
                };
            });
        },
        async login(user, pw) {
            const payload = {
                username: 'test',
                password: 'test'
            }
            let api_url = "http://127.0.0.1:8000/api/token/";
            await axios
                .post(api_url, payload)
                .then(response => {
                    localStorage.setItem('access', response.data.access);
                    localStorage.setItem('refresh', response.data.refresh);
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async getFridgesFromDb() {
            let db = await this.getDb();

            return new Promise(resolve => {
                var tx = db.transaction(['fridges'], 'readonly');
                var store = tx.objectStore('fridges');
                let fridges = [];
                store.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        cursor.value['reference'] = "/food/" + cursor.value.id + "/list"
                        fridges.push(cursor.value);
                        cursor.continue();
                    }
                };
                this.fridges = fridges;
            });
        },
        async getFridgesFromNetwork() {
            let db = await this.getDb();

            const payload = {
                headers: { Authorization: `Bearer ${localStorage.getItem('access')}` }
            }
            let api_url = "http://127.0.0.1:8000/api/fridges";
            axios
                .get(api_url, payload)
                .then(response => {
                    this.fridges = response.data;
                    return new Promise((resolve, reject) => {
                        var tx = db.transaction('fridges', 'readwrite');
                        var store = tx.objectStore('fridges');
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
        async getNotifications() {
            const payload = {
                headers: { Authorization: `Bearer ${localStorage.getItem('access')}` }
            }

            let api_url = "http://127.0.0.1:8000/api/notifications/by_user/";
            axios
                .get(api_url, payload)
                .then(response => {
                    this.notifications = response.data;
                    this.unread_notifications = this.notifications.filter(notification => notification.unread == true);
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async getFarvoritesFromDb() {
            let db = await this.getDb();

            return new Promise(resolve => {
                var tx = db.transaction(['favorites'], 'readonly');
                var store = tx.objectStore('favorites');
                let favorites = [];
                store.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        cursor.value['reference'] = "/food/" + cursor.value.id + "/list"
                        favorites.push(cursor.value);
                        cursor.continue();
                    }
                };
                this.favorites = favorites;
            });

        },
        async getFarvoritesFromNetwork() {
            let db = await this.getDb();

            const payload = {
                headers: { Authorization: `Bearer ${localStorage.getItem('access')}` }
            }
            let api_url = "http://127.0.0.1:8000/api/fridges/favorites";
            axios
                .get(api_url, payload)
                .then(response => {
                    this.favorites = response.data;
                    return new Promise((resolve, reject) => {
                        var tx = db.transaction('favorites', 'readwrite');
                        var store = tx.objectStore('favorites');
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
        }
    }
});