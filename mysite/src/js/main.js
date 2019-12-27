import Vue from 'vue'	
//import Vuetify from 'vuetify/lib'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Baseline from '@/components/baseline.vue'
//import Index from '../components/index.vue'
import HelloWorld from '@/components/HelloWorld.vue'	
//import vuetify from '../plugins/vuetify';	
import MyComponent from '@/components/my-component.vue';

Vue.config.productionTip = false
window.Vue = require('vue');
//Vue.use(vuetify)

console.log('hogehoge')
/*
new Vue({	
  vuetify,	
  render: h => h(App)	
}).$mount('#app')

*/


const requireComponent = require.context(
  // コンポーネントフォルダの相対パス
  '../components',
  // サブフォルダ内を調べるかどうか
  false,
  // 基底コンポーネントのファイル名に一致させるのに使う正規表現
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // コンポーネント設定を取得する
  const componentConfig = requireComponent(fileName)

  // コンポーネント名をパスカルケース (PascalCase) で取得する
  const componentName = upperFirst(
    camelCase(
      // フォルダの深さに関わらずファイル名を取得する
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )


  // コンポーネントをグローバル登録する
  Vue.component(
    componentName,
    // `export default` を使ってコンポーネントがエクスポートされた場合に存在する
    // `.default` でコンポーネントオプションを期待していて
    // 存在しない場合にはモジュールのルートにフォールバックします。
    componentConfig.default || componentConfig
  )
})

// export default 
export default {
  components: { MyComponent },
  components: { HelloWorld},
  components: { Baseline },
};


new Vue(
  {
  delimiters: ['[[', ']]'],
  //vuetify: new Vuetify(),
  vuetify,
  el: "#app",
  //template: "<App />",
  components: { HelloWorld },
  render: h => h(HelloWorld),
  data: {
    message: 'Hello Vue!!'
  },
  template: '<app></app>'
  })

new Vue(
  {
  //vuetify: new Vuetify(),
  vuetify,
  el: "#baseline",
  //template: "<App />",
  //components: { Baseline },
  render: h => h(Baseline),
  data: {
    message: 'Hello Vue!'
  },
  }
)

new Vue({
  vuetify,
  //el: '#example',
  components: { MyComponent },
  template: '<my-component></my-component>'
}).$mount('#example')

console.log('hogehoge end')
