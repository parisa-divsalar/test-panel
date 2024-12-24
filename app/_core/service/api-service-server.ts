import axios from 'axios'

const API_SERVICE_SERVER = axios.create({
    baseURL: 'https://stage2-api.insight-clinic.com/controller/',
    // baseURL: 'http://stage1-api.insight-clinic.com/controller/',
})

API_SERVICE_SERVER.interceptors.request.use(
    (request) => {
        request.params = { ...request.params }

        request.headers['AuthorizationKey'] = '133079ba-9b43-11ee-b9d1-0242ac120002'

        return request
    },
    (error) => {
        return Promise.reject(error)
    },
)

API_SERVICE_SERVER.interceptors.response.use((response) => {
    return response
})

export default API_SERVICE_SERVER
