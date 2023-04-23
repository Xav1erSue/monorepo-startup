import SMStorage from "@/store/localStorage"

export const getToken = () => {
  return SMStorage.get<string>("token")
}

export const setToken = (token: string) => {
  return SMStorage.set("token", token)
}
