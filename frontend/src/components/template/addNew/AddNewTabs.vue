<template>
  <div class="addnew-tabs" id="addNew">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{ active: activeTab === index }"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
         <router-link :to="{ path: '/projects/new'}"> 
            <NewProject v-if="activeTab === 0" />
        </router-link>
        <router-link :to="{ path: '/skills/new'}">
            <NewSkill v-if="activeTab === 1" />
        </router-link>
      
    </div>
  </div>
</template>

<script>
import NewProject from './NewProject.vue'
import NewSkill from './NewSkill.vue'

export default {
  components: {
    NewProject,
    NewSkill
  },
  data() {
    return {
      activeTab: 0,
      tabs: ['Add Project', 'Add Skill'],
    };
  },
};
</script>

<style scoped>
.addnew-tabs {
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 3vh;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  justify-content: center; /* Centraliza os tabs na horizontal */
  white-space: nowrap; /* Impede que os tabs quebrem para a próxima linha */
}

.tabs button {
  background: transparent;
  min-width: 120px; /* Largura mínima dos tabs */
  padding: 15px 20px; /* Espaçamento interno dos tabs */
  cursor: pointer;
  border: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1rem; 
  margin: 0 10px; /* Espaçamento entre os tabs */
  transition: background-color 0.3s; /* Transição suave ao passar o mouse */
}
.tab button:hover:after {
    bottom: 0;
    width: 60%;
    background: #ff9124;
}

.tabs button.active {
  position: relative;
  z-index: -1;
}

.tabs button.active:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  width: 60%;
  background: #ff9124;
}
</style>
