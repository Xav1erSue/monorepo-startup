import { KEY_PREFIX } from "@/consts"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import SMStorage from "../localStorage"
import { IRootStore } from "./types"

const useRootStore = create<IRootStore>()(
  devtools(
    persist(
      (set) => ({
        userInfo: {
          username: "",
          phoneNumber: "",
        },
        setUserInfo(userInfo) {
          set({ userInfo })
        },
        logOut() {
          SMStorage.clear()
        },
      }),
      {
        name: KEY_PREFIX + "/rootStore",
        getStorage: () => localStorage,
      }
    )
  )
)

export default useRootStore
