<template>
  <div>
    <!-- Botão flutuante -->
    <button class="floating-button" :style="{ bottom: buttonBottom }" @click="openPopup">
      <i class="fas fa-plus"></i>
    </button>

    <!-- Popup -->
    <div v-if="isPopupOpen" class="popup" @click.self="closePopup" :class="{ 'fullscreen': isMobile }">
      <div class="popup-content">
        <button v-if="isMobile" class="close-button" @click="closePopup"><i class="fas fa-times"></i></button>
        <AddNewTabs></AddNewTabs>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewTabs from './AddNewTabs.vue'

export default {
    name: 'AddNew',
    components: {
        AddNewTabs,
    },
    data() {
        return {
            isPopupOpen: false,
            buttonBottom: '5vh', // Inicialmente a 5vh do bottom
            isMobile: window.innerWidth <= 768 // Verifica se é um dispositivo móvel
        };
    },
    methods: {
        openPopup() {
            this.isPopupOpen = true;
        },
        closePopup() {
            this.isPopupOpen = false;
        },
        handleScroll() {
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            // Verifica se o usuário chegou ao final da página
            if (scrollPosition === documentHeight) {
                this.buttonBottom = '15vh'; // Altera a distância para 15vh
            } else {
                this.buttonBottom = '5vh'; // Mantém a distância em 5vh
            }
        },
        checkWindowSize() {
            this.isMobile = window.innerWidth <= 768;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.checkWindowSize);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.checkWindowSize);
    }
}
</script>
<style scoped>
.floating-button {
    position: fixed;
    right: 40px;
    background: linear-gradient(85deg, rgba(204,38,0,1) 0%, rgba(255,145,36,1) 100%);
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Garante que o botão fique acima de outros elementos */
    transition: bottom 0.3s ease; /* Transição suave */
}
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Garante que o popup fique acima de outros elementos */
}

.popup-content {
    position: relative;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 18px;
    background-color: #222222;
    padding: 30px;
    width: 40%; 
    height: 80vh;
    overflow-y: auto; 
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 24px;
    padding: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
}

/* Estilos para dispositivos móveis */
@media only screen and (max-width: 768px) {
    .popup-content {
        width: 100%; /* Ocupa toda a largura */
        height: 100%; /* Ocupa toda a altura */
        border-radius: 0; /* Remove o raio da borda */
        padding: 0; /* Remove o padding */
    }

    .close-button {
        top: 20px;
        right: 20px;
    }
}

</style>
