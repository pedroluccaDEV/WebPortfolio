<template>
  <div class="skill-tabs" id="skills">
    <div class="tab">
      <button
        v-for="(skill, index) in skills"
        :key="index"
        @click="activeTab = index"
        :class="{ active: activeTab === index }"
      >
        {{ skill }}
      </button>
    </div>
    <div class="tab-content">
      <FrontendSkills v-if="activeTab === 0" />
      <BackendSkills v-if="activeTab === 1" />
      <PersonalSkills v-if="activeTab === 2" />
    </div>
  </div>
</template>

<script>
import FrontendSkills from './FrontendSkills.vue';
import BackendSkills from './BackendSkills.vue';
import PersonalSkills from './PersonalSkills.vue';

export default {
  components: {
    FrontendSkills,
    BackendSkills,
    PersonalSkills,
  },
  data() {
    return {
      activeTab: 0,
      skills: ['Frontend', 'Backend', 'Personal Skills'],
    };
  },
};
</script>

<style scoped>
.skill-tabs {
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 10vh;
    margin-bottom: 20px;
}
.tab {
    display: flex;
}

.tab button {
    background: transparent;
    width: 20%;
    height: 35px;
    cursor: pointer;
    border: none;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1rem; 
    
}
.tab button:after {
    content: "";
    display: block;
    margin: auto;
    height: 3px;
    width: 0;
    transition: all .4s;
}

.tab button:hover:after {
    bottom: 0;
    width: 60%;
    background: #ff9124;
}

.tab button.active {
    position: relative;
    z-index: -1;
    
}

.tab button.active:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 60%;
    background: #ff9124;
}
@media (min-width: 0px) and (max-width: 768px) {
    .tab{
        margin: auto;
    }
    .tab button{
        width: 100%;
    }
    
}

</style>
