import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css'
import 'boxicons/css/boxicons.min.css';
import { createHead } from '@vueuse/head'

const app = createApp(App);
const head = createHead()

app.use(head)
app.use(router); 
// Usa el router en la aplicación
app.mount('#app');
