<template>
    <div class="backend">
        <h1 class="title">Backend</h1>
        <p class="desc">
                Backend refers to the part of an application or website with which users do not interact directly. 
            It is the system's component responsible for processing data, managing storage, and handling business logic. 
            While the frontend focuses on the user interface (UI) and user interaction, the backend takes care of the 
            behind-the-scenes operations that enable the frontend to function.
        </p>
        <p class="desc">
            Backend development involves using server-side programming languages like Node.js, Python, or Java, 
            and databases like MySQL, MongoDB, or PostgreSQL. It also includes creating APIs 
            (Application Programming Interfaces) that facilitate communication between the frontend and backend.
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
    name: 'BackendSkills',
    components: { ToolItem },
    setup() {
    const tools = ref([
        { id: 1, name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-3550841-2970426.png' },
        { id: 2, name: 'Express', description: 'A fast, unopinionated, minimalist web framework for Node.js.', imageUrl: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png' },
        { id: 3, name: 'Python', description: 'A programming language that lets you work quickly and integrate systems more effectively.', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-python-3629591-3032289.png' },
        { id: 4, name: 'MongoDB', description: 'A cross-platform document-oriented database program.', imageUrl: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld' },
        { id: 5, name: 'PostgreSQL', description: 'An open-source relational database management system.', imageUrl: 'https://golden-team.org/static/services/postgresql.webp' },
        { id: 6, name: 'Rest API', description: 'A set of rules that allow programs to communicate with each other over the internet.', imageUrl: 'https://affilae.com/wp-content/uploads/2022/09/icons8-rest-api.svg' },
    ]);

    return { tools };
    },

}
</script>

<style scoped>
.backend{
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