import axios from 'axios'

const baseURL = 'https://contzx.herokuapp.com'

const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api