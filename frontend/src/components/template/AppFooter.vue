<template>
    <footer>
        <div class="copy">
            &copy; 2024 Pedro Araujo. All Rights Reserved.
        </div>
        <div class="social">
            <a href="https://www.linkedin.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" class="social-icon">
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" class="social-icon">
            </a>
            <a href="https://wa.me/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png" alt="WhatsApp" class="social-icon">
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style scoped>
footer {
    background: #222222;
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.2); /* Sombra projetada para dentro */
    padding: 20px 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
}

.copy {
    margin-left: 20px;
    text-align: center; /* Centraliza o texto */
}

.social {
    display: flex;
    justify-content: center; /* Centraliza os ícones */
    margin-top: 10px; /* Espaço entre o texto e os ícones */
}

.social-icon {
    width: 30px;
    height: 30px;
    margin-left: 10px; /* Espaço entre os ícones */
    margin-right: 10px;
}

@media (max-width: 768px) {
    footer {
        flex-direction: column; /* Empilha os elementos verticalmente */
        text-align: center; /* Centraliza todo o conteúdo */
    }

    .social {
        margin-top: 20px; /* Aumenta o espaço entre o texto e os ícones */
    }

    .copy {
        margin-left: 0; /* Remove a margem lateral */
    }
}
</style>
