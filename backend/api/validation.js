module.exports = app => {
    //validação para valores que devem existir
    function existsOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.lenght === 0) throw msg
        if(typeof value === 'string' && !value.trim())  throw msg
    }
    //validação para valores que não devem existir
    function notExistsOrError(value, msg){
        try {
            exitsOrError(value, msg)
        } catch(msg) {
            return
        }
        throw msg

    }
    //validação para valores que devem ser iguais 
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}