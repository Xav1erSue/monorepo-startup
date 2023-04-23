import Router from "@/router"
import "dayjs/locale/zh-cn"
import { BrowserRouter } from "react-router-dom"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
export default App
