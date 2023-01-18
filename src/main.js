import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

createApp(App).use(store).use(bootstrap).mount('#app');
