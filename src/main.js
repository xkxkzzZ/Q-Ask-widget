import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// export { app }; 
export const MyVueApp = App;

// createApp(App).mount('#app')

const app = createApp(App);
app.mount('#app');

