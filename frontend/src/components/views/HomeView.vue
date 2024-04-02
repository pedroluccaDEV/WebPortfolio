<template>
  <div class="home">
    <Header />
    <AboutView />
  </div>
</template>

<script>
import Header from '../template/AppHeader.vue'
import AboutView from './AboutView.vue'

export default {
    name: 'HomeView',
    components: {
        Header,
        AboutView
    }
}
</script>
<style scoped>
.home{
margin-top: 15vh;
}
</style>
