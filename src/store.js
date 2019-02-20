import Vue from 'vue'
import Vuex from 'vuex'
import service from './model/service'
import Animals from "./model/Animals"
Vue.use(Vuex)

export default new Vuex.Store({//创建仓库
    modules:{
      service,Animals
    }
})
