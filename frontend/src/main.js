import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import { Quasar } from 'quasar';


const app = createApp(App) // Use createApp from Vue 3
app.use(router)
app.use(store)
app.use(Quasar)
app.mount('#app')