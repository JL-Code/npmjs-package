import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { VueAccessControl, VueDialog } from '../../../dist/plugins'
// import { VueAccessControl,VueDialog } from "npmjs-package/dist/plugins";
// import { VueAccessControl,VueDialog } from "npmjs-package";

Vue.config.productionTip = false

Vue.use(VueAccessControl, { router })
Vue.use(VueDialog)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
