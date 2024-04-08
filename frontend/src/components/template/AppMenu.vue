<template>
  <aside class="menu" v-show="isVisible">
    <img src="../../../public/assets/default.png" alt="Logo" class="logo">
    <div class="nav">
        <router-link :to="{ path: '/about', hash: '#about'}" class="centro">
            <i class="fa fa-info-circle" style="color: white; margin-right: 20px; font-size:16px;"></i>
            About
        </router-link>

        <router-link :to="{ path: '/projects', hash: '#projects'}" class="centro">
            <i class="fa fa-file-code" style="color: white; margin-right: 20px; font-size:16px;"></i>
            Projects
        </router-link>
      
        <router-link :to="{ path: '/skills', hash: '#skills' }" class="centro">
            <i class="fa fa-brain" style="color: white; margin-right: 20px; font-size:16px;"></i>
            Skills
        </router-link>
    </div>
    <button class="hire">Hire Me</button>
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
  </aside>
</template>

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
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30%;
  padding: 20px;
  border-radius: 0 18px 0 18px;
  background: #31303a;
  box-shadow: rgba(0, 0, 0, 0.422) 6px 2px 16px 0px, rgba(0, 0, 0, 0.509) -6px -2px 16px 0px;
}

.logo {
  justify-content: center;
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.nav a {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
}

.hire {
  border: none;
  background: linear-gradient(85deg, rgba(204,38,0,1) 0%, rgba(255,145,36,1) 100%);
  box-shadow: rgba(204, 37, 0, 0.582) 0px 5px 15px;
  border-radius: 45px;
  cursor: pointer;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  width: 100%;
  height: 5vh;
  margin-top: 6vh;
  margin-bottom: 6vh;
}

.social {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: auto;
}

.social-icon {
  width: 30px;
  height: 30px;
}

</style>
