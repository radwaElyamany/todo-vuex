export const namespaced = true;

export const state = {
  todoList: [
    { id: 0, title: 'Go to codepen and get inspired', done: false },
    { id: 1, title: 'Pick a project', done: false },
    { id: 4, title: 'Create a new pen', done: true },
  ],
};

export const mutations = {
  ADD_ITEM(state, newTodo) {
    state.todoList.unshift({
      id: this.todoList.length,
      title: newTodo,
      done: false,
    });
  },
  DELETE_ITEM(state, item) {
    state.todoList.splice(state.todoList.indexOf(item), 1);
  },
};

export const actions = {
  addItem({ state, commit }, newTodo) {
    if (state.new_todo) {
      commit('ADD_ITEM', newTodo);
    }
  },
  deleteItem({ commit }, item) {
    commit('DELETE_ITEM', item);
  },
};

export const getters = {
  pending: state => {
    return state.todoList.filter(function (item) {
      return !item.done;
    });
  },
  completed: state => {
    return state.todoList.filter(function (item) {
      return item.done;
    });
  },
  getTodoById: state => id => {
    return state.todoList.find(each => each.id === id);
  },
};
