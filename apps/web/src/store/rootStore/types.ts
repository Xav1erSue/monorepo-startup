export interface IRootStore {
  userInfo: {
    username: string
    phoneNumber: string
  }
  setUserInfo: (userInfo: IRootStore["userInfo"]) => void
  logOut: () => void
}
