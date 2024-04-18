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
            <ToolItem v-for="skill in skills" :key="skill.id" :skill="skill" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import ToolItem from './ToolItem.vue'

export default {
    name: 'FrontendSkills',
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
    },
    mounted(){
        this.getSkills()
    }

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