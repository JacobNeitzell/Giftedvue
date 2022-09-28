import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const sandboxServer = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 4000,

})