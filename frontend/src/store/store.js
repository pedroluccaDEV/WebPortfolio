
import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state: {
    projects: [],
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get('URL_DA_SUA_API/projetos');
      commit('setProjects', response.data);
    },
  },
});

export default store;
