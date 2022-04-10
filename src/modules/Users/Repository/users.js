import axios from './axiosConfig'

const resource = '/user'
export default {

  getUsers () {
    return axios.get(`${resource}`)
  },
  getUser (userId) {
    return axios.get(`${resource}/${userId}`)
  }
}