import axios from 'axios'
import { refreshToken } from '../helpers/refresh.token.js'

export const PublicAxiosService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})


/* ALL AXIOS REQUESTS */
Axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem('user'))
    if (session?.token) {
      config.headers = {
        ...config.headers,
        "X-CSRFToken": session?.token,
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

/* ALL AXIOS RESPONSES */
Axios.interceptors.response.use(
  (response) => response?.data,
  async (error) => {
    const config = error?.config
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true

      const result = await refreshToken()
      if (result?.token) {
        config.headers = {
          ...config.headers,
          "X-CSRFToken": result?.token,
        }
      }
      let res = await axios(config)
      return res?.data
    }
    return Promise.reject(error)
  }
)

export const AxiosService = Axios