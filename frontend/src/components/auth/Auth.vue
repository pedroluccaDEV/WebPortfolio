<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo">
      <div class="auth-title">
        {{ showSignup ? 'Cadastro' : 'Login' }}
      </div>
      <div>
        <div class="row justify-content-center">
          <div class="col-xs-12">
            <form>
              <input class="form-control mb-3" v-if="showSignup" v-model="user.name" type="text" placeholder="Nome">
              <input class="form-control mb-3" v-model="user.email" type="text" placeholder="E-mail">
              <input class="form-control mb-3" v-model="user.password" type="password" placeholder="Senha" autocomplete="current-password">
              <input class="form-control mb-3" v-if="showSignup" v-model="user.confirmPassword" type="password" placeholder="Confirme a Senha" autocomplete="current-password">
              <div class="text-center">
                <button class="btn btn-outline-primary mr-3" v-if="showSignup" @click="signup">Registrar</button>
                <button class="btn btn-outline-primary" @click="signin" v-else>Entrar</button>
              </div>
            </form>
          </div>
        </div>
        <div class="text-center">
          <a href="#" @click.prevent="showSignup = !showSignup">
            <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
            <span v-else>Não tem cadastro? Registre-se aqui!</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey} from '@/global'
import axios from 'axios'

export default {
  name: 'Auth',
  data() {
    return {
      showSignup: false,
      user: {}
    }
  },
  methods: {
    signin() {
      axios.post(`${baseApiUrl}/signin`, this.user)
        .then(res => {
          this.$store.commit('setUser', res.data)
          localStorage.setItem(userKey, JSON.stringify(res.data))
          this.$router.push({ path: '/'})
        })
        .catch(showError)
    },
    signup() {
      axios.post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSucess()
          this.user = {}
          this.showSignup = false
        })
        .catch(showError)
    }
  }
}
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #FFF;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input.form-control {
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
}

.auth-modal button.btn {
  align-self: flex-end;
  padding: 5px 15px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
}

.text-center {
  margin-top: 10px;
}
</style>
