import { createApp } from 'vue'

// Vuetify
import { vuetify } from './plugins/vuetify'
// Custom CSS
import "./styles/global.scss"

// Import Root Component
import App from './App.vue'

// Import Pinia
import { createPinia } from 'pinia'

// Import Router
import router from './router/index'

// i18n multi Language
import i18n from './plugins/i18n'

// ApexChart
import VueApexCharts from 'vue3-apexcharts'

// Date Picker
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
// Use Date Picker
app.component('Datepicker', Datepicker)

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueApexCharts)
app.mount('#app')
