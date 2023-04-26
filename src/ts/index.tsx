// Import modules:
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import comps:
import Main from "./pages/Main";
import Calc1 from "./pages/Calc1";
import Calc2 from "./pages/Calc2";
import Calc3 from "./pages/Calc3";

// Import SASS files:
import "../sass/main.scss";

async function loadApp() {
    const main = await Main();
    const calc1 = await Calc1();
    const calc2 = await Calc2();
    const calc3 = await Calc3();

    const App = (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={main}>
                    <Route path="calc1" element={calc1}/>
                    <Route path="calc2" element={calc2}/>
                    <Route path="calc3" element={calc3}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );

    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
    root.render(App)
}

loadApp();
