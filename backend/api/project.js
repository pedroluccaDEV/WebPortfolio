module.exports = app => {
    const { existsOrError } = app.api.validation

    // Create/update project
    const save = (req, res) => {
        const project = { ...req.body }
        if (req.params.id) {
            project.id = req.params.id
        }

        // Validations
        try {
            existsOrError(project.name, 'Informe o nome do projeto!')
            existsOrError(project.description, 'Seu projeto deve ter uma descrição!')
            existsOrError(project.date, 'Informe quando seu projeto foi finalizado!')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        // Remove confirmPassword field if present (for security reasons)
        delete project.confirmPassword

        if (project.id) {
            app.db('projects')
                .update(project)
                .where({ id: project.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('projects')
                .insert(project)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('projects')
                .where({ id: req.params.id })
                .del()

            try {
                existsOrError(rowsDeleted, 'Projeto não encontrado!')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('projects')
            .select('id', 'name', 'description','cover_url','date')
            .then(projects => res.json(projects))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('projects')
            .select('id', 'name', 'description','cover_url','date')
            .where({ id: req.params.id })
            .first()
            .then(project => {
                if (!project) {
                    return res.status(404).send('Projeto não encontrado.')
                }
                project.description = project.description.toString('utf-8') // Convert buffer to string
                return res.json(project)
            })
            .catch(err => res.status(500).send(err))
    }

    return {
        save,
        remove,
        get,
        getById
    }
}
