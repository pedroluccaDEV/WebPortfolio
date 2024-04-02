<template>
    <aside class="menu" v-show="isVisible">
        <img src="../../../public/assets/default.png" alt="Logo" class="logo">
            <div class="nav">
                <router-link to="/about"  ref="about" class="centro">About</router-link>
                <router-link to="/projects" class="centro">Projects</router-link>
                <router-link to="/skills" ref="skills" class="centro">Skills</router-link>
            </div>
            <button class="hire">Hire Me</button>
            <div class="social">
                <img src="../../../public/assets/default.png" alt="linkedin" class="medias">
                <img src="../../../public/assets/default.png" alt="instagram" class="medias">
                <img src="../../../public/assets/default.png" alt="whatsapp" class="medias">
            </div>
    </aside>
</template>s

<script>
export default {
  name: 'AppMenu',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.menu {
    z-index: 2;
    position: fixed; /* Fixa o menu na tela */
    top: 0; /* Alinha o menu no topo da tela */
    left: 0; /* Alinha o menu à esquerda da tela */
    height: 100vh; /* Altura total da tela */
    width: 30%; /* Largura do menu */
    padding: 20px; /* Espaçamento interno */

    border-radius: 0 18px 0 18px;
    background: #31303a;
    box-shadow: rgba(0, 0, 0, 0.422) 6px 2px 16px 0px, rgba(0, 0, 0, 0.509) -6px -2px 16px 0px;

}

.logo{
    justify-content: center;
    width: 150px;
    height: auto;
    margin-bottom: 20px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 25px; /* Espaçamento entre os itens */
}

.nav a {
    color: #fff;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
}

.hire{
    border: none;
    background: linear-gradient(85deg, rgba(204,38,0,1) 0%, rgba(255,145,36,1) 100%);;
    box-shadow: rgba(204, 37, 0, 0.582) 0px 5px 15px;
    border-radius: 45px;
    cursor: pointer;

    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 0.8rem; /* Tamanho reduzido para caber em uma linha */


    width: 100%;
    height: 5vh;
    margin-top: 6vh;
    margin-bottom: 6vh;
}
.social{
    display: flex;
    align-items: flex-end; /* Alinha as imagens ao fundo do menu */
    justify-content: space-between; /* Espaçamento igual entre as imagens */
    margin-top: auto; /* Empurra as imagens para o fundo */
   
}

.medias{
    width: 50px;
    height: auto;

}

</style>
