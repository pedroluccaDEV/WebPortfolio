<template>
    <div>
        <form class="form-column">
            <div class="input-wrapper">
                <input
                    class="input__field"
                    id="skill-name"
                    type="text"
                    autocomplete="off"
                    v-model="skill.name"
                    required
                    placeholder=""
                />
                <label class="input__label" for="skill-name">Nome da Habilidade</label>
            </div>
            <div class="input-wrapper">
                <textarea
                    class="input__field"
                    id="skill-description"
                    v-model="skill.description"
                    required
                    style="height: 15vh;"
                    maxlength="70"
                    placeholder=""
                ></textarea>
                <label class="input__label" for="skill-description">Descrição da Habilidade</label>
                <span class="char-counter">{{ characterCount }} / 70 </span>
            </div>
            <div class="input-wrapper">
                <input
                    class="input__field"
                    id="skill-coverUrl"
                    type="text"
                    autocomplete="off"
                    v-model="skill.image"
                    required
                    placeholder=""
                />
                <label class="input__label" for="skill-coverUrl">Link da Imagem de Capa</label>
            </div>
            <div class="select">
                <span class="select__label">Tipo de Habilidade</span>
                <select
                    class="select__field"
                    id="skill-code"
                    type="text"
                    autocomplete="off"
                    v-model="skill.code"
                    required
                    placeholder=""
                >
                    <option value="">
                        Selecione o tipo de habilidade
                    </option>
                    <option value="Fronted">
                        Fronted
                    </option>
                    <option value="Backend">
                        Backend
                    </option>
                    <option value="Personal Skill">
                        Personal Skill
                    </option>
                </select>
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
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
    name: "NewProject",
    data() {
        return {
            skill: {
                name: "",
                description: "",
                cover_url: "",
            },
        };
    },
    computed: {
        characterCount() {
            return this.skill.description.length;
        }
    },
    methods: {

        reset() {
            this.skill.name = "";
            this.skill.description = "";
            this.skill.image = "";
        },
        save() {
            if (
                this.skill.name &&
                this.skill.description &&
                this.skill.code &&
                this.skill.image
            ) {
                const url = `${baseApiUrl}/skills/new`;
                console.log("URL:", url);
                console.log("Dados da Habilidade:", this.skill);

                axios
                    .post(url, this.skill)
                    .then(() => {
                        console.log("Habilidade Adicionada");
                        this.reset();
                    })
                    .catch(error => {
                        console.error("Erro ao salvar habilidade:", error);
                    });
            } else {
                console.error("Por favor, preencha todos os campos antes de salvar.");
            }
        }
    }
};
</script>

<style scoped>
.form-column {
    margin-top: 5vh;
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

.form-column .select {
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

.select {
    position: relative;
    outline: none;
}
.select__label {
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

.select__field{
    width: 100%;
    background: #222;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    border-radius: 18px;
    border: none;
    padding: 5px 10px; /* Adicione espaçamento interno para o botão */
    appearance: none; /* Remove o estilo padrão do sistema */
    -webkit-appearance: none; /* Para navegadores WebKit (Safari, Chrome) */
    -moz-appearance: none; /* Para navegadores Firefox */
    outline: none;
    cursor: pointer;
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


</style>
