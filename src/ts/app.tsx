import React from "react";
//@ts-ignore
import { test } from "backend";
import ThemeChanger from "./comps/ThemeChanger";


export default function App(): React.ReactElement {
    console.log(test());
    return <React.Fragment>
        <ThemeChanger/>
        <h1 id="main-header">Chemistry Helper</h1>
    </React.Fragment>
}
