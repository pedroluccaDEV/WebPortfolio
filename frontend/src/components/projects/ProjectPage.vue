<template>
    <div class="project-page">
        <h1 class="title">{{ project.name }}</h1>
        <div class="project-highlights">
        </div>
        <p class="description">{{ project.description }}</p>
        <div class="skills"></div>
        <a href="" class="link"></a>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'


export default {
    name: 'ProjectPage',
    data:function(){
        return{
            project:{}
        }
    },
    mounted(){
        const url = `${baseApiUrl}/projects/${this.$route.params.id}`
        axios.get(url)
            .then(res => this.project = res.data)
            .catch(err => {
                console.error('Error loading project', err)
            })
    }
}

</script>

<style>
.project-page{
    margin-left: 5vw;
    margin-right: 5vw;
}
.title{
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: #fff;
    line-height: 1; 
}
.description{
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1rem; 
    color: #fff;
}
</style>