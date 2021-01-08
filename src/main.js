import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMq from 'vue-mq'
import VueLazyload from 'vue-lazyload'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './App.scss'

Vue.config.productionTip = false

Vue.use(VueMq, {
    breakpoints: {
        sm: 768,
        md: 992,
        lg: Infinity,
    },
    defaultBreakpoint: 'sm'
})

Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
})

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')