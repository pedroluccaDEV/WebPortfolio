import axios from 'axios'

const sucess = res => res
const error = err => {
    if(401 === err.response.st){
        window.location = '/'
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(sucess, error)