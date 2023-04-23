import ReactDOM from "react-dom/client"
import App from "./App"

import "@/assets/styles/reset.css"
import "virtual:windi.css"
import "./index.scss"

const root = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(root).render(<App />)
