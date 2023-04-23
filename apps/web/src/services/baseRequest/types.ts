import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

export interface RequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptors?: (
    config: AxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorsCatch?: (err: unknown) => unknown
  // 响应拦截
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: AxiosError) => void
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}

// 基本请求返回类型
export interface BaseType<T = unknown> {
  code: number
  msg: string
  data?: T
}

// 定义方法重载
export interface IRequest {
  get<T>(config: RequestConfig<BaseType<T>>): Promise<BaseType<T>>
  get<T>(url: string, config: RequestConfig<BaseType<T>>): Promise<BaseType<T>>

  post<T>(config: RequestConfig<BaseType<T>>): Promise<BaseType<T>>
  post<T>(url: string, config: RequestConfig<BaseType<T>>): Promise<BaseType<T>>

  delete<T>(config: RequestConfig<BaseType<T>>): Promise<BaseType<T>>
  delete<T>(
    url: string,
    config: RequestConfig<BaseType<T>>
  ): Promise<BaseType<T>>

  put<T>(config: RequestConfig<BaseType<T>>): Promise<BaseType<T>>
  put<T>(url: string, config: RequestConfig<BaseType<T>>): Promise<BaseType<T>>
}
