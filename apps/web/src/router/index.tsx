import useScrollToTop from "@/hooks/useScrollToTop"
import { useRoutes } from "react-router-dom"
import { Routes } from "./routes"

const Router: React.FC = () => {
  useScrollToTop()
  return useRoutes(Routes)
}

export default Router
