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
            <div class="input-wrapper">
                <textarea
                    class="input__field"
                    id="project-description"
                    v-model="project.description"
                    required
                    placeholder=""
                    style="height: 15vh;"
                    maxlength="220"
                ></textarea>
                <label class="input__label" for="project-description">Descrição do Projeto</label>
                <span class="char-counter">{{ characterCount }} / 220 </span>
            </div>
            <div class="date">
                <span class="date__label">Data de finalização</span>
                <div class="data__fields">
                    <input
                        type="text"
                        class="dd"
                        placeholder="dd"
                        maxlength="2"
                        v-model="day"
                        @input="focusNext($event, 'mm')"
                    />
                    <span class="divisor">/</span>
                    <input
                        type="text"
                        class="mm"
                        placeholder="mm"
                        maxlength="2"
                        v-model="month"
                        @input="focusNext($event, 'yy')"
                    />
                    <span class="divisor">/</span>
                    <input
                        type="text"
                        class="yy"
                        placeholder="yy"
                        maxlength="2"
                        v-model="year"
                    />
                </div>
            </div>
            <div class="buttons">  
                <button 
                    type="submit"
                    @click="save">Salvar
                </button>
                <button 
                    type="button" 
                    @click="reset">Cancelar
                </button>
            </div>
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
            day: "",
            month: "",
            year: "",
        }
    },
    computed: {
        characterCount() {
            return this.project.description.length
        },
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
        },
        focusNext(event, nextField) {
            const input = event.target
            if (input.value.length >= 2) {
                const nextInput = input.nextElementSibling;
                if (nextInput && nextInput.classList.contains(nextField)) {
                    nextInput.focus();
                }
            }

        },
    }
}
</script>

<style scoped>
.form-column {
    margin-top: 10vh;
}
.form-column .input-wrapper input,
.form-column .input-wrapper textarea {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 15px;
    width: 100%;
    height: 5vh;
    padding: 8px;
    background: #2222;
    color: #fff;
    border: 3px solid #8f8f8f;
    border-radius: 18px;
    outline: none;
}

.form-column .input-wrapper input:focus,
.form-column .input-wrapper :focus {
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
.input__field:focus + .input__label,
.input__field:not(:placeholder-shown) + .input__label {
    top: 0px;
    color: #ff9124;
    font-weight: 500;
}

.char-counter{
    position: absolute;
    top: 90%;
    left: 85%;
    transform: translateY(-50%);
    color: #8f8f8f;
    transition: top 0.3s, color 0.3s;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none; /* Impede eventos de clique no texto */
    padding: 0 5px; /* Adiciona um pequeno espaçamento */
}
.data{
    width: 100%;
}

.date__label{
    background-color: #222;
    color: #8f8f8f;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    white-space: nowrap;
    pointer-events: none; /* Impede eventos de clique no texto */
    padding: 0 5px; /* Adiciona um pequeno espaçamento */
    margin: auto;
    
}

.data__fields{
    display: flex;
    align-items: center;
    
    margin:auto;
    margin-top: 10px;
    margin-bottom: 15px;

    width: 60%;
    height: 5vh;
    padding: 2px 8px;

    background: #2222;
    color: #fff;
    border: 3px solid #8f8f8f;
    border-radius: 18px;
    outline: none;
}
.data__fields input{
    margin: auto;
    background-color: #222;
    border: none;
    outline: none;
    width: 10%;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    
}

.divisor{
    color: #8f8f8f;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    white-space: nowrap;
    pointer-events: none; /* Impede eventos de clique no texto */
}



</style>
