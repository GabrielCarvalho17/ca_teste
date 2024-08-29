import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import router from './router'
import store from './store'

// Importando o SCSS customizado que já contém o Bootstrap
import '@/assets/scss/custom-bootstrap.scss'

// Importando o JavaScript do Bootstrap (opcional, se precisar das funcionalidades JS do Bootstrap)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(store).mount('#app')
