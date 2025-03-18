import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css'
import 'boxicons/css/boxicons.min.css';
 // Asegúrate de importar el router

const app = createApp(App);

app.use(router); // Usa el router en la aplicación
app.mount('#app');
