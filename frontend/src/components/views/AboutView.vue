<template>
    <div class="about" ref="about" id="about">
        <div class="texts">
            <h1 class="title">{{ title }}</h1>
            <h1 class="pedro">{{ text1 }} - {{ text2 }}</h1>
            <p class="desc">{{ description }}</p>
            <div class="b-desc">
                <button class="cv">Download CV</button>
            </div>
        </div>
        <div class="foto"></div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    data() {
        return{
            title: 'Helo, Im',
            text1: 'Pedro',
            text2: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
        }
    }
}

</script>

<style scoped>
    .about{
        display: flex;
        justify-content: space-between; /* Distribui os itens uniformemente */
        align-items: center; /* Alinha os itens verticalmente */ 
        margin-top: 5vh;
        margin-left: 10vw;
        margin-right: 10vw;
    }

    .foto{
        width: 300px;
        height: 300px;
        background: #594346;
        border-radius: 360px;
        transition: width 3s, height 3s;
    }

    .texts {
        max-width: 42vw;
        
    }
    .b-desc{
        margin-top: 7vh;
        
    }

    .cv{
        background: #31303a;
        box-shadow: #31303a 0px 5px 15px;
        border-radius: 45px;
        border: none;
        cursor: pointer;
        transition: width 0.5s, height 0.5s;

        color: #fff;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 0.8rem; /* Tamanho reduzido para caber em uma linha */


        width: 125px;
        height: 5vh;
        margin-right: 3vw;
        
    }

    .cv:hover{
        background: #747289a4;
        box-shadow: #3c3b47 0px 5px 15px;
        

    }

    .title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 4rem; /* Tamanho reduzido para caber em uma linha */
        line-height: 1; /* Para garantir que fique em uma linha */
        margin-bottom: 0.5rem; /* Espaço entre o título e o texto */
        background: linear-gradient(85deg, rgba(204,38,0,1) 0%, rgba(255,145,36,1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        overflow-y: hidden;
    }

    .pedro {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 3rem; /* Tamanho reduzido para caber em uma linha */
        color: #fff;
        line-height: 1; /* Para garantir que fique em uma linha */
    }
     .desc{
        margin-top: 30px;
        
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: #fff;
     }
   @media (max-width: 768px) {
        .about {
            flex-direction: column; /* Empilha os itens verticalmente */
            align-items: center; /* Alinha os itens ao centro  */ 
            margin-left: 10vw;
            margin-right: 10vw;
            
        }
        .foto {
            margin-top: 30px;
            margin-bottom: 20px; /* Adiciona espaço entre a foto e o texto */
            order: 2; /* Altera a ordem para aparecer após o texto */
        }

        .texts {
            text-align: center; /* Centraliza o texto */
            order: 1; /* Altera a ordem para aparecer antes da imagem */
            max-width: 80vw;
        }
        .b-desc{
            margin-top: 7vh;
            margin-bottom: 7vh;
            gap: 0;
        }
        .cv{
            width: 70%;
            margin: auto;
            margin-bottom: 4vh;
        }
    }
    @media (max-width: 980px) and (min-height: 746px) {
    .foto {
        width: 200px;
        height: 200px;
    }
    .about{
        margin-left: 5vw;
        margin-right: 5vw;
    }
}

</style>
