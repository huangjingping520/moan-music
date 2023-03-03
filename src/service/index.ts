import { BASE_URL, TIME_OUT } from './config'
import MARequest from './request'

const maRequest = new MARequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default maRequest
