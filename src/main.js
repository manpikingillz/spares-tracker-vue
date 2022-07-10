import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';                           //icons


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(PrimeVue, {ripple: true});

app.component("InputText", InputText);
app.component("Button", Button);

app.mount('#app')
