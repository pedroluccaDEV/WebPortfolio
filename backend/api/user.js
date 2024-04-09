

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    
    //CREATE AND UPDATE user
    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id){
            user.id = req.param.id
        }
        if(!req.originalUrl.startsWith('/users')){
            user.admin = false
        }
        if(!req.user || !req.user.adin){
            user.admin = false
        }

        try {
            existisOrError(user.name, 'Nome não informado !')
            existsOrError(user.email, 'Email não informado !')
            existsOrError(user.password, 'Senha não informada !')
            existsOrError(user.confirmPassword, 'Confirme a senha !')
            equalsOrError(user.confirmPassword, 'As senhas devem ser iguais !')

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            if(!user.id){
                notExistsOrError(userFromDB, 'Usuario já cadastrado !')
            }
        } catch (msg){
            return (res.status(400).send(msg))
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id){
            app.db ('user')
                .update(user)
                where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    //GET users
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    //GET user
    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .whereNull('deletedAt')
            first()
            .then(user => res.json(user))
            .catch(err => res.statuns(500).send(err))
    }

    //DELETE user
    const remove = async(req, res) => {
        try{
            const rowsUpdated = await app.db('users')
            .update({ deletedAt: new Date() })
            .where({ id: req.params.id })
            existsOrError(rowsUpdated, 'Usuário não encontrado !')
            
            res.status(204).send()
        } catch(msg){
            res.status(400).send(msg)
        }
    }
    return{
        //CRUD
        save,
        get,
        getById,
        remove,
    }
}