import type { IAuthResponse, ILoginParams, IRegisterParams } from "@typing/auth"
import { baseRequest } from "../instance"

export const register = async (userInfo: IRegisterParams) => {
  return baseRequest.post<IAuthResponse>("/register", { data: userInfo })
}

export const login = async (userInfo: ILoginParams) => {
  return baseRequest.post<IAuthResponse>("/login", { data: userInfo })
}
