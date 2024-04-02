<template>
    <div class="frontend">
        <h1 class="title">Frontend</h1>
        <p class="desc">
            Frontend refers to the part of an application or website with which users interact directly. 
            It is the user interface (UI) that determines how the application or website is presented and how users can 
            interact with it. Frontend is developed using web technologies such as HTML, CSS, and JavaScript, and it runs 
            in the user's web browser.
        </p>
        <h2 class="sub">Development Tools</h2>
        <div class="tool-list">
            <ToolItem v-for="tool in tools" :key="tool.id" :tool="tool" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import ToolItem from './ToolItem.vue'

export default {
    name: 'FrontendSkills',
    components: { ToolItem },
    setup() {
       const tools = ref([
            { id: 1, name: 'Vue 3', description: 'A progressive JavaScript framework for building user interfaces.', imageUrl: 'https://vuejs.org/images/logo.png' },
            { id: 2, name: 'React', description: 'A JavaScript library for building user interfaces, developed by Facebook.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
            { id: 5, name: 'HTML', description: 'The standard markup language for creating web pages and web applications.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
            { id: 6, name: 'CSS', description: 'A style sheet language used for describing the presentation of a document written in HTML.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
            { id: 7, name: 'JavaScript', description: 'A programming language that enables interactive web pages and is essential for web development.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
            { id: 9, name: 'Bootstrap', description: 'A free and open-source CSS framework directed at responsive, mobile-first front-end web development.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' },
        ]);

        return { tools }
    },

}
</script>

<style scoped>
.frontend{
    margin-top: 10vh;
}
.title{
    margin-bottom: 5vh;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
}

.desc{
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1rem; 
    width: 60%;
    margin-bottom: 5vh;
}

.sub{
    font-size: 2rem;
    margin-bottom: 5vh;
    color: #ababab;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
}
.tool-list{
    display: flex;
    justify-content: center;
    align-items: center;
}


@media (min-width: 0px) and (max-width: 768px) {
    .title{
        text-align: center;
    }
    .desc{
        width: 100%;
        margin-bottom: 5vh;
    }
    .sub{
        text-align: center;
    }
    .tool-list{
        display: grid;
        grid-template: repeat(3, 1fr);
        grid-gap: 10px;
    }
}

</style>