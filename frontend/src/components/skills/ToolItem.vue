<template>
  <div class="tool-item" @mouseover="showDescription = true" @mouseleave="showDescription = false">
    <h3 class="tool-name">{{ tool.name }}</h3>
    <img :src="tool.imageUrl" alt="Tool Image" class="tool-image" :class="{ 'rounded': showDescription }">
    <div v-if="showDescription" class="tooltip" :class="{ 'tooltip-visible': showDescription }">
      <p class="tool-description">{{ tool.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tool: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDescription: false
    };
  }
};
</script>
<style>
.tool-item {
    
    margin-right: 2.5vw;
    margin-left: 2.5vw;
    position: relative;
    margin-bottom: 20vh;
    text-align: center;
    justify-content: center;
    cursor: pointer;
}
.tool-name {
    margin-bottom: 10px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1rem; 
}
.tool-image {
  width: auto;
  height: 60px;
  border-radius: 18px;
  cursor: pointer;
}
.tooltip {
    position: absolute;
    top: 110px; /* Posiciona o tooltip abaixo da imagem */
    left: 50%;
    transform: translateX(-50%);
    background: #31303a;
    box-shadow: #31303a 0px 5px 15px;
    color: #fff;
    padding: 10px;
    border-radius: 18px;
    visibility: hidden;
    transition: opacity 0.3s ease;
    width: 200px; /* Largura ajustada para exibir a descrição com mais linhas */
    text-align: center; /* Centraliza o texto */
    white-space: pre-line; /* Permite a quebra de linha na descrição */
}
.tool-item:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
.tool-description {
    margin-bottom: 10px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
}
.tool-item.show-description {
  padding-bottom: 20px;
}

@media (min-width: 0px) and (max-width: 768px) {
    .tool-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;    
    }
    
}
</style>
