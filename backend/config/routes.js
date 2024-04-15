module.exports  = app => {

    app.post('/register', app.api.user.save)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/projects')
        .post(app.api.project.save)
        .get(app.api.project.get)

    app.route('/projects/:id')
        .put(app.api.project.save)
        .get(app.api.project.getById)
        .delete(app.api.project.remove)

    app.route('/skills')
        .post(app.api.skill.save)
        .get(app.api.skill.get)
    
    app.route('/skills/:id')
        .put(app.api.skill.save)
        .get(app.api.skill.getById)
        .delete(app.api.skill.remove)

}