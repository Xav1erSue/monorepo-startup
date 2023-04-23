import type { AxiosInstance, AxiosResponse } from "axios"
import axios from "axios"
import type {
  BaseType,
  IRequest,
  RequestConfig,
  RequestInterceptors,
} from "./types"

class Request implements IRequest {
  instance: AxiosInstance
  interceptorsObj?: RequestInterceptors<AxiosResponse<BaseType>>

  constructor(config: RequestConfig<AxiosResponse<BaseType>>) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )

    // 默认响应拦截器
    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err
    )
  }

  private requestBuilder(method: string) {
    const _request = <T>(config: RequestConfig<T>): Promise<T> => {
      return new Promise((resolve, reject) => {
        // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
        if (config.interceptors?.requestInterceptors) {
          config = config.interceptors.requestInterceptors(config)
        }
        this.instance
          .request<any, T>(config)
          .then((res) => {
            // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
            if (config.interceptors?.responseInterceptors) {
              res = config.interceptors.responseInterceptors(res)
            }

            resolve(res)
          })
          .catch((err: any) => {
            reject(err)
          })
      })
    }
    return <R>(
      arg1: string | RequestConfig<BaseType<R>>,
      arg2?: RequestConfig<BaseType<R>>
    ): Promise<BaseType<R>> => {
      if (typeof arg1 === "string")
        return _request<BaseType<R>>({ url: arg1, ...arg2, method })
      else return _request<BaseType<R>>({ ...arg2, method })
    }
  }

  public get<T>(
    arg1: string | RequestConfig<BaseType<T>>,
    arg2?: RequestConfig<BaseType<T>>
  ) {
    return this.requestBuilder("GET")(arg1, arg2)
  }

  public post<T>(
    arg1: string | RequestConfig<BaseType<T>>,
    arg2?: RequestConfig<BaseType<T>>
  ): Promise<BaseType<T>> {
    return this.requestBuilder("POST")(arg1, arg2)
  }

  public delete<T>(
    arg1: string | RequestConfig<BaseType<T>>,
    arg2?: RequestConfig<BaseType<T>>
  ): Promise<BaseType<T>> {
    return this.requestBuilder("DELETE")(arg1, arg2)
  }

  public put<T>(
    arg1: string | RequestConfig<BaseType<T>>,
    arg2?: RequestConfig<BaseType<T>>
  ): Promise<BaseType<T>> {
    return this.requestBuilder("PUT")(arg1, arg2)
  }
}

export default Request
