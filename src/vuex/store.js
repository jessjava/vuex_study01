import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	count : 0,//学习 vuex 而定义的一个计数器
	num : 1,//每次递增递减的数值,默认为1
	rawHtml : "",
	renderHtml : ""
}

const mutations = {
	["MARKDOWN_SUCCESS"] (state, _rawHtml, content){
		state.rawHtml = _rawHtml;
		state.renderHtml = content;
	},
	["INCREMENT"] (state, amount) {
		state.count = state.count + parseInt(amount);
	},
	["REDUCE"] (state, amount) {
		state.count = state.count - parseInt(amount);
	},
	["UPDATE_NUM"] (state, num) {
		state.num = num;
	}
}

export default new Vuex.Store({
    state,
    mutations
})