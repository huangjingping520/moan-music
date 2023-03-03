import { AxiosResponse,AxiosRequestConfig } from 'axios'

export interface MAInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface requestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MAInterceptors<T>
}
