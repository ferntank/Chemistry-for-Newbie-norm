// Import modules:
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app"

// Import SASS files:
import "../sass/main.scss";

async function load() {
    const app = await App();
    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
    root.render(app)
}

load();
