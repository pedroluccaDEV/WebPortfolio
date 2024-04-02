<template>
    <div class="project-page">
        <h1 class="title">{{ project.name }}</h1>
        <div class="project-highlights"></div>
        <p class="description">{{ project.description }}</p>
        <div class="skills"></div>
        <a href="" class="link"></a>
    </div>
</template>

<script>
export default {
    name: 'ProjectPage',
    props: {
        project: Object
    }
}
</script>

<style>

</style>