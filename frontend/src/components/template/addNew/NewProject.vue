<template>
  <div>
    <form @submit.prevent="save" class="form-column">
      <div class="input-wrapper">
        <input
          class="input__field"
          id="project-name"
          type="text"
          autocomplete="off"
          v-model="project.name"
          required
          placeholder=""
        />
        <label class="input__label" for="project-name">Nome do Projeto</label>        
      </div>

      <input
        id="project-description"
        type="text"
        v-model="project.description"
        required
        placeholder="Informe a Descrição do Projeto..."
      />

      <input id="project-date" type="date" v-model="project.date" required />

      <button type="submit">Salvar</button>
      <button type="button" @click="reset">Cancelar</button>
    </form>
  </div>
</template>

<script>
import { baseApiUrl } from "@/global"
import axios from "axios"

export default {
  name: "NewProject",
  data() {
    return {
      project: {
        id: "",
        name: "",
        description: "",
        date: "",
      },
      projects: [],
    }
  },
  methods: {
    save() {
      const method = this.project.id ? "put" : "post";
      const id = this.project.id ? `/${this.project.id}` : "";
      axios[method](`${baseApiUrl}/projects${id}`, this.project)
        .then(() => {
          // this.$toasted.global.defaultSucess()
          this.reset()
        })
        .catch()
    },
    reset() {
      this.project = {
        id: "",
        name: "",
        description: "",
        date: "",
      }
    }
  }
}
</script>

<style scoped>
.form-column {
  margin-top: 10vh;
 
}
.form-column input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 5vh;
  padding: 8px;
  background: #2222;
  color: #fff;
  border: 3px solid #8f8f8f;
  border-radius: 18px;
  outline: none;
}

.form-column input :focus{
     outline: none;
}
.input-wrapper {
  position: relative;
  outline: none;

}
.input__label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #8f8f8f;
  transition: top 0.3s, color 0.3s;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  white-space: nowrap;
  pointer-events: none; /* Impede eventos de clique no texto */
  background-color: #222; /* Fundo sólido para cobrir a linha */
  padding: 0 5px; /* Adiciona um pequeno espaçamento */
}
.input__field:focus + .input__label {
  top: 0px;
  color: #ff9124;
  font-weight: 500;
}

.form-column button {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
