import React from "react";
import init, { check_if_exists, reaction } from "backend";
import { theme } from "./theme";

export default async function App() {
    await init();
    const root = document.getElementById("root") as HTMLElement;
    root.style.backgroundColor = theme.isLight?"#eeeeee":"#212121";
    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}