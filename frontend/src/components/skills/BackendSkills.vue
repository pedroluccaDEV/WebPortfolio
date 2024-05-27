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
             <ToolItem v-for="skill in skills" :key="skill.id" :skill="skill" />
        </div>
    </div>
</template>

<script>
import ToolItem from './ToolItem.vue'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'BackendSkills',
    components: { ToolItem },
    data(){
        return {
            skills: [],
            loading: false
        }
    },
    methods: {
        getSkills(){
            if(this.loading) return

            this.loading = true
            const url = `${baseApiUrl}/skills`
            axios(url)
                .then(res => {
                    this.skills = res.data
                    this.loading = false
                })
                .catch(error => {
                    console.error('Error loading skills:', error)
                    this.loading = false
                })
        }
    }
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