import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import actions from "./actions"
import mutations from "./mutations"

// import seperate state
import gamePlay from "./gamePlay"

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    modules: {
        game: gamePlay
    }
})
