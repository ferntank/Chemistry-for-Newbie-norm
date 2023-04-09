import reactDOM from "react-dom/client";
import App from "./comps/App";
import "../sass/main.scss"

const root = reactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App/>)
