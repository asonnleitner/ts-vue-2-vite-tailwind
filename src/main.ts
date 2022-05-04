import App from '~/app.vue'
import router from '~/router'
import store from '~/store'

import '~/main.css'

Vue.config.productionTip = false

const app = new Vue({ router, store, render: (h) => h(App) })

app.$mount('#app')

export default app
