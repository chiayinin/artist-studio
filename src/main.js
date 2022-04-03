import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
// GOOGLE MAP
// import VueGoogleMaps from '@fawmi/vue-google-maps';
import App from './App.vue';
import router from './router';

// const loader = {
//   load: {
//     key: 'process.env.VUE_GOOGLE_API_KEY'
//   }
// };

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
// app.use(VueGoogleMaps, loader);
app.mount('#app');
