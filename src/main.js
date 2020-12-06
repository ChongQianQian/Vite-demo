import { createApp,h } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App)
    .component('comp',{
        render() {
            return h('div','i am a comp')
        },
    })
    .mount('#app')
