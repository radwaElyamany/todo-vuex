import Vue from 'vue';
import Vuex from 'vuex';
import * as todoList from './modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoList,
  },
});
