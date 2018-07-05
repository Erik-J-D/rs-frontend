import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

export function getAllTheData () {
  return api.get('/shelves')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    })
}
