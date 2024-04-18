<template>
    <div class="app">
        <HomeView />
        <ProjectList ref="projects" />
        <SkillTabs />
        <AddNew />
        <AppFooter />
    </div>
</template>

<script>
import HomeView from './components/views/HomeView.vue'
import ProjectList from './components/projects/ProjectList.vue'
import SkillTabs from './components/skills/SkillTabs.vue'
import AppFooter from './components/template/AppFooter.vue'
import AddNew from './components/template/addNew/AddNew.vue'

export default {
    name: 'App',
    components :{
        HomeView,
        ProjectList,
        SkillTabs,
        AppFooter,
        AddNew
    },
    

}
</script>

<style>
body {
    overflow-x: hidden;
    margin: 0;
    background: #222222;
}

.app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
