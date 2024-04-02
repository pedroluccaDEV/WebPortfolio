<template>
    <div class="header">
        <img src="../../../public/assets/default.png" alt="Logo" class="logo">
        <div class="links">
            <router-link :to="{ path: '/about', hash: '#about'}" class="centro">About</router-link>
            <router-link :to="{ path: '/projects', hash: '#projects'}" class="centro">Projects</router-link>
            <router-link :to="{ path: '/skills', hash: '#skills' }" class="centro">Skills</router-link>
            <button class="toggle" @click="toggleMenu">
                <i class="fas fa-bars" 
                    style="color: #fff;
                        margin: auto;"></i>
            </button>
            <AppMenu v-if="$mq !== 'xs' && $mq !== 'sm'" :isVisible="isMenuVisible" />
        </div>
    </div>
</template>

<script>

import AppMenu from './AppMenu.vue'

export default {
    name: 'AppHeader',
    components: { AppMenu },
    data() {
    return {
        isMenuVisible: false
    }
  },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible; // Alterna a visibilidade do menu
        },
        scrollTo(hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    watch: {
        '$route'() {
            if (this.$route.meta.scrollToTop) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (this.$route.meta.scrollTo) {
                this.scrollTo(this.$route.meta.scrollTo);
            }
        }
    }
        
}
</script>

<style scoped>
@import "~@fortawesome/fontawesome-free/css/all.css";
    .toggle{
        display: none;
        
    }
    .header {
        z-index: 1000;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 5vh;
        padding: 20px 0;

        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    }
    
    .links{
        align-items: center;
        margin-left: auto;
        margin-right: 10vw;
        
    }

    a.centro {
        display: inline-block;
        position: relative;

        color: #fff;
        text-decoration: none;

        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        line-height: 46px;
        padding:0 1.5rem;
    }

    a.centro:after {
        content: "";
        display: block;
        margin: auto;
        height: 3px;
        width: 0px;
        transition: all .4s;
    }

    a.centro:hover:after {
        width: 100%;
        background: #ff9124;
    }
    
    .logo{
        margin-right: auto;
        margin-left: 10vw;

        height: 14vh;
        width: auto;
    }

@media (min-width: 0px) and (max-width: 768px) {
    a.centro {
        display: none;
    }
    a.centro:after {
        display: none;
    }
    .toggle{
        display: flex;
        border: none;
        height: 5vh;
        width: 5vh;
        background: #31303a;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 45px;
        cursor: pointer;
    
        
    }
    
}
</style>