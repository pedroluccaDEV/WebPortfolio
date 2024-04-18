
module.exports = app =>  {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const skill = { ...req.body }
        if(req.params.id){
            skill.id = req.params.id
        }

        try{
            existsOrError(skill.name, 'A Habilidade deve ter um nome !')
            existsOrError(skill.description, 'Insira a descrição da habilidade !')
            existsOrError(skill.image, 'Escolha uma imagem para a habilidade !')
            existsOrError(skill.area, 'Escolha qual sobre qual área é a habilidade !')
        } catch(msg){
            return res.status(400).send(msg)
        }

        if(skill.id){
            app.db('skills')
                .update(skill)
                .where({ id: skill.id})
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('skills')
                .insert(skill)
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = (req, res) => {
        try {
            const rowsDeleted = app.db('skills')
                .where({ id: req.params.id })
                .del()

            try {
                existsOrError(rowsDeleted, 'Skill not found !')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('skills')
            .select('name', 'description', 'image', 'area')
            .then(skills => res.json(skills))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) =>{
        app.db('skills')
            .select('name', 'description', 'image', 'area')
            .where({ id: skill.id })
            .first()
            .then(skill => {
                if (!skill) {
                    return res.status(404).send('Skill not found !.')
                }
                skill.description = skill.description.toString('utf-8') // Convert buffer to string
                return res.json(skill)
            })
            .catch(err => res.status(500).send(err))
    }

    return{
        save, 
        remove,
        get,
        getById
    }

}