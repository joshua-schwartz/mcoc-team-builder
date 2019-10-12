import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// const mtbApi = axios.create({
// 	baseURL: ''
// })

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		champsList: {}
	},
	mutations: {
		champsList(state, payload) {
			state.champsList = payload
		}
	},
	actions: {
		fetchChampsList({
			commit
		}) {
			commit('champsList', true)
		}
	}
})