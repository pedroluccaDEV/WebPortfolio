<template>
    <router-link :to="'/projects/' + project.id" class="project-item-link" @click="openPjTab">
        <div class="project-item-container">
            <img :src="project.cover_url ? project.cover_url : require('../../../public/assets/default.png')" alt="Project Image" class="project-image" />
            <div class="project-details">
                <h2>{{ project.name }}</h2>
                
                <p>{{ project.description }}</p>
            </div>
        </div>
    </router-link>

    <div v-if="isPjOpen" class="pjTab" @click.self="closePjTab" :class="{ 'fullscreen': isMobile }">
      <div class="pjTab-content">
        <button v-if="isMobile" class="close-button" @click="closePjTab"><i class="fas fa-times"></i></button>
        <ProjectPage></ProjectPage>
      </div>
    </div>

</template>
<script>
import ProjectPage from './ProjectPage.vue'

export default {
    name: 'ProjectItem',
    components: { ProjectPage },
    data() {
        return {
            isPjOpen: false,
            isMobile: window.innerWidth <= 768
        }
    },
    props: {
        project: Object
    },
    methods: {
        openPjTab() {
            this.isPjOpen = true;
        },
        closePjTab() {
            this.isPjOpen = false;
        },
        checkWindowSize() {
            this.isMobile = window.innerWidth <= 768;
        },
    }
}
</script>
<style scoped>
.project-item-link {
    text-decoration: none;
    color: inherit;
}
.project-item-container {
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 18px;
    
    margin-bottom: 20px;
    background-color: #222222;
    padding: 30px;
    max-width: 250px;
    max-height: 480px;
    aspect-ratio: 313 / 500;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: width 1s, height 1s;
    transition: transform 0.3s, box-shadow 0.3s;
}
.project-image {
    width: 60%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 18px;
}

.project-details{
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 0.9rem; /* Tamanho reduzido para caber em uma linha */
}
.project-details h2 {
    text-align: center;
    width: 100%;
    margin-bottom: 2vh;
}

.project-details .data{
    margin-top: 3vh;
    margin-bottom: auto;
    text-align: right;
    font-weight: 300;
    display: none;
}
.project-item-container:hover {
    transform: translateY(-15px); /* Levanta o item em 5 pixels */
    z-index: -1;
}

@media (min-width: 1050px) and (max-width: 1300px) {
    .project-item-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 507px;
        max-height: 260px;
        aspect-ratio: 510 / 260;
    }
    .project-image {
        width: 30%;
        height: auto;
        margin-right: 20px;
    }
    .project-details {
        color: #fff;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 1em; /* Tamanho inicial dos textos */
        flex: 1;
    }
    .project-details h2 {
        text-align: center;
        width: 100%;
        margin-bottom: 1vh; /* Reduz a margem inferior */
        font-size: 1em; /* Tamanho inicial dos textos */
    }

    .project-details .data {
        margin-top: 1.5vh; /* Reduz o espaçamento superior */
        text-align: right;
        font-weight: 300;
        font-size: 0.9em; /* Tamanho dos textos */
    }
}
@media (min-width: 100px) and (max-width: 1060px) {
        .project-item-container {
        flex-direction: row;
        max-width: 1000px;
        max-height: 300px;
        aspect-ratio: 1000 / 300;
        padding: 10px;
        margin-bottom: 0;
    }
    .project-image {
        width: 20%;
        margin-right: 5px;
        margin-bottom: 0;
    }
    .project-details {
        color: #fff;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 1em; 
        flex: 1;
    }
    .project-details h2 {
        text-align: center;
        width: 100%;
        margin-bottom: 1vh; /* Reduz a margem inferior */
        font-size: 1rem; /* Tamanho inicial dos textos */
    }

    .project-details .data {
        display: none;
    }
}
@media (min-width: 10px) and (max-width: 768px) {
    .project-details {
        color: #fff;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 0.8em; 
        flex: 1;
    }
    .project-item-container {
        pointer-events: none;
    }      
}

.pjTab {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Garante que o popup fique acima de outros elementos */
}

.pjTab-content {
    position: relative;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 18px;
    background-color: #222222;
    padding: 30px;
    width: 80%; /* Define a largura máxima do conteúdo */
    height: 80vh; /* Define a altura máxima do conteúdo */
    overflow-y: auto; /* Adiciona scroll vertical se necessário */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 24px;
    padding: 0;
    display: flex;
    align-items: center;
}

/* Estilos para dispositivos móveis */
@media only screen and (max-width: 768px) {
    .pjTab-content {
        width: 100%; /* Ocupa toda a largura */
        height: 100%; /* Ocupa toda a altura */
        border-radius: 0; /* Remove o raio da borda */
        padding: 0; /* Remove o padding */
    }

    .close-button {
        top: 20px;
        right: 20px;
    }
}



</style>
