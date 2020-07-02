const DB_NAME = 'freego_db';
const DB_VERSION = 7;
let DB;
// const URL = "https://freego.srvz-webapp.he-arc.ch"
const DEV_URL = "http://127.0.0.1:8000"
const routes = []

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

var appFridges = new Vue({
    delimiters: ['[[', ']]'],
    router,
    el: '#app-base',
    data: () => ({
        db: null,
        fridges: [],
        favorites: [],
        notifications: [],
        unread_notifications: [],

        //map
        selectedFeatures: [],
        zoom: 15,
        center: [7.6451, 47.5227],
        rotation: 0,
        geolocPosition: undefined,
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
        async login() {
            if (access != "" && refresh != "") {
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);
            }
        },
        async logout() {
            localStorage.clear();
            return true;
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
                        console.log(fridges);

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
            let api_url = DEV_URL + "/api/fridges";
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
            let api_url = DEV_URL + "/api/notifications/by_user/";
            axios
                .get(api_url, payload)
                .then(response => {
                    this.notifications = response.data;
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
            let api_url = DEV_URL + "/api/fridges/favorites";
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
        },
        clickOnFridge: function (evt) {
            evt.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                console.log(feature.getId())
                window.location.href = DEV_URL + '/food/' + feature.getId() + "/list";
            })
        },
        goBack: function () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }

    }
});