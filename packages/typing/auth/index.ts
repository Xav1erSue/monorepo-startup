export interface ILoginParams {
  username: string
  password: string
}

export interface IRegisterParams {
  username: string
  phoneNumber: string
  password: string
}

export interface IAuthResponse {
  token: string
}
