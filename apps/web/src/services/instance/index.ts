import { getToken } from "@/utils/auth"
import { InternalAxiosRequestConfig } from "axios"
import Request from "../baseRequest"

export const baseURL = import.meta.env.DEV
  ? "http://localhost:3000"
  : "http://api.xxx.com"

export const baseRequest = new Request({
  baseURL,
  interceptors: {
    requestInterceptors: (config) => {
      const Authorization = `Bearer ${getToken()}`
      config.headers = { ...config.headers, Authorization }
      return config as InternalAxiosRequestConfig
    },
    responseInterceptors: (response) => {
      if (response.data.code !== 200) {
        const msg = response.data.msg
        console.error(msg)
      }
      return response
    },
    responseInterceptorsCatch: (err) => {
      console.error(err.message)
    },
  },
})
