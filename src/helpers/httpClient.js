import axios from 'axios'

const axiosIntance = axios.create({
  baseURL: 'https://swapi.co/api',
})

export default axiosIntance
