// WORKS PERFECTLY // DO NOT TOUCH //

import ReactDOM from "react-dom/client";
import App from "./App";
import "../sass/main.scss";

async function load():Promise<void>{ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(await App())}

load();
