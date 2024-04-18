<template>
  <div class="project-list" ref="projectList" id="projects">
    <h1 class="title">Projects</h1>
    <div class="project-items">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import ProjectItem from './ProjectItem.vue';

export default {
    name: 'ProjectList',
    components: { ProjectItem },
    data() {
        return {
            projects: [],
            loading: false
        }
    },
    methods: {
        getProjects() {
            if (this.loading) return

            this.loading = true
            const url = `${baseApiUrl}/projects`
            axios(url)
                .then(res => {
                    this.projects = res.data
                    this.loading = false
                })
                .catch(error => {
                    console.error('Error loading projects:', error)
                    this.loading = false
                })
        }
    },
    mounted() {
        this.getProjects()
    }
}
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
