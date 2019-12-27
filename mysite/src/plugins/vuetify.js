// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

//Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(),
})

const opts = {
  theme: {
    dark: true,
  },
}

export default new Vuetify(opts)