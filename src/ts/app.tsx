import React from "react";
//@ts-ignore
import init, { test } from "backend";
import ThemeChanger from "./comps/ThemeChanger";

export default async function App() {
    await init();
    console.log(test())
    return <React.Fragment>
        <ThemeChanger/>
        <h1 id="main-header">Chemistry Helper</h1>
    </React.Fragment>
}
