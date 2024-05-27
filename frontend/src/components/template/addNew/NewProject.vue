<template>
    <div>
        <form class="form-column">
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
                    style="height: 15vh;"
                    maxlength="220"
                    placeholder=""
                ></textarea>
                <label class="input__label" for="project-description">Descrição do Projeto</label>
                <span class="char-counter">{{ characterCount }} / 220 </span>
            </div>
            <div class="date">
                <span class="date__label">Data de finalização</span>
                <div class="date__fields">
                    <input
                        type="text"
                        class="dd"
                        placeholder="DD"
                        maxlength="2"
                        v-model="day"
                    />
                    <input
                        type="text"
                        class="mm"
                        placeholder="MM"
                        maxlength="2"
                        v-model="month"
                    />
                    <input
                        type="text"
                        class="yy"
                        placeholder="YY"
                        maxlength="2"
                        v-model="year"
                    />
                </div>
            </div>
            <div class="input-wrapper">
                <input
                    class="input__field"
                    id="project-coverUrl"
                    type="text"
                    autocomplete="off"
                    v-model="project.cover_url"
                    required
                    placeholder=""
                />
                <label class="input__label" for="project-coverUrl">Link da Imagem de Capa</label>
            </div>
            <div class="buttons">
                <button
                    class="save"
                    type="submit"
                    @click="save"
                >
                    Submit
                </button>
                <button
                    class="cancel"
                    type="button"
                    @click="reset"
                >
                    Cancel
                </button>
            </div>
            <div class="validations"
                 v-if="!validation" >
                <p 
                    class="msg" placeholder="">
                        Os campos ( Nome de Projeto, Descrição do Projeto e Data de Finalização ) são Obrigatórios
                    </p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";
import { reloadPage } from "../../../util/utils.js"

export default {
    name: "NewProject",
    data() {
        return {
            project: {
                name: "",
                description: "",
                cover_url: "",
                date: ""
            },
            day: "",
            month: "",
            year: "",
            validation: true
        };
    },
    computed: {
        characterCount() {
            return this.project.description.length;
        }
    },
    methods: {
        closePopup() {
            this.$emit("close-popup");
        },
        DateInputs() {
            if (this.day && this.month && this.year) {
                return `${this.year}-${this.month}-${this.day}`;
            } else {
                return "";
            }
        },
        reset() {
            this.project.name = "";
            this.project.description = "";
            this.project.cover_url = "";
            this.project.date = "";
            this.day = "";
            this.month = "";
            this.year = "";
            this.closePopup()
        },
        save() {
            this.project.date = this.DateInputs();
            if (
                this.project.name &&
                this.project.description &&
                this.project.date 
            ) {
                const url = `${baseApiUrl}/projects/new`;
                console.log("URL:", url);
                console.log("Dados do Projeto:", this.project);

                axios
                    .post(url, this.project)
                    .then(() => {
                        console.log("Projeto criado");
                        this.reset();
                        reloadPage();
                    })
                    .catch(error => {
                        console.error("Erro ao salvar projeto:", error);
                    });
            } else {
                this.validation = false
                console.error("Por favor, preencha os campos obrigatórios.");

            }
        }
    }
};
</script>

<style scoped>
.form-column {
    margin-top: 3vh;
    width: 100%;
    height: 100%;

}
.form-column .input-wrapper input,
.form-column .input-wrapper textarea{
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
.form-column .date .date__fields {
    display: flex;
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
.date {
    position: relative;
    outline: none;
}
.date__label {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #8f8f8f;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    white-space: nowrap;
    pointer-events: none;
    background-color: #222;
    padding: 0 5px;
}
.date__fields{
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
.date__fields input{
    margin: auto;
    background-color: #2e2e2e;
    border: none;
    outline: none;
    width: 30%;
    height: 3vh;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    border-radius: 10px;
    text-align: center;
}

.buttons {
    margin-top: 5vh;
    width: 100%;
    
}

.buttons button{
    width: 30%;
    height: 4.5vh;

    border-radius: 18px;
    border: none;
    
    margin-right: 10px;
    margin-left: 5px;

    color: #fff;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    
}
.save{
   
    background: linear-gradient(90deg, rgba(0,145,92,1) 0%, rgba(52,255,150,1) 100%);

}

.save:hover{
    box-shadow: rgba(52, 255, 150, 0.349) 0px 5px 15px;
}

.cancel{
    background: linear-gradient(85deg, rgba(204,38,0,1) 0%, rgba(255,145,36,1) 100%);
}
.cancel:hover{
    box-shadow: rgba(204, 37, 0, 0.582) 0px 5px 15px;
    
}

.validations{
    margin-top: 3vh;
    width: 100%;
    height: 7vh;
    background: rgba(255, 129, 104, 0.637);
    border-radius: 10px;
    border: solid 2px #931f2198;
    overflow: hidden;
    padding: 3px;
    cursor: default;
}

.msg{
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
}
</style>
