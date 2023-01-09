import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import VueGoogleMaps from '@fawmi/vue-google-maps'
import 'animate.css';
createApp(App).use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',}
    }).use(store).use(router).mount("#app");
