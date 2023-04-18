import reactDOM from "react-dom/client";
import App from "./comps/App";
import "../sass/main.scss"

async function loadApp() {
    const app = await App();
    const root = reactDOM.createRoot(document.getElementById("root") as HTMLElement)
    root.render(app)
}

loadApp();
