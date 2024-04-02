<template>
  <div class="project-list" ref="projectList">
    <h1 class="title">Projects</h1>
    <div class="project-items">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  name: 'ProjectList',
  components: { ProjectItem },
  setup() {
    const projects = ref([
      { id: 1, name: 'Portfolio - Vue 3', description: 'A Vue 3 portfolio project featuring Vuex for state management, Vue Router for routing, and Bootstrap-Vue for UI components. The project showcases projects with dynamic loading and responsive design.', imageUrl: '' },
      { id: 2, name: 'CreditScore AI', description: 'This AI project uses Python and its libraries to build a machine learning model for predicting credit scores. Trained on financial data, including income, debt, and payment history, using pandas and scikit-learn, the model assesses creditworthiness', date: '2023-03-20', imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-decrease-money-3927803-3254117.png?f=webp&w=256' },
      { id: 3, name: 'Full-Stack Web Application', description: 'Full-Stack Web Application with Vue, Node, PostgreSQL, MongoDB, and Knex. Robust web application built with Vue.js, Node.js, PostgreSQL, MongoDB, and Knex.js for comprehensive data management and user interactions.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9rrlC9aVb0oEeIUneRNvRWcR7-pmqLqMsSSKmpfRZYupTkzl78NsBqXUW5g0Erh0Vto&usqp=CAU' },
    ]);

    return { projects };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 5vh;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3.5rem; /* Tamanho reduzido para caber em uma linha */
}

.project-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0; /* Sem espaçamento entre os itens */
  margin-left: 10vh;
  margin-right: 10vh;
  justify-items: center; /* Centraliza os itens horizontalmente */
}

@media (min-width: 1060px) and (max-width: 1300px) {
    .project-items{
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}
@media (min-width: 400px) and (max-width: 1060px) {
    .project-items {
        display: grid;
        grid-template-columns: 1fr; /* Apenas uma coluna */
        gap: 20px;
        margin-left: 10vw;
        margin-right: 10vw;
    }
}
</style>
