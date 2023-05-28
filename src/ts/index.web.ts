// WORKS PERFECTLY // DO NOT TOUCH //

//@ts-ignore
import init from "backend";
import { AppRegistry } from "react-native";
import App from "./App";
import "../sass/main.scss";

const appName: string = "Chemistry Helper";

init().then(() => {
    AppRegistry.registerComponent(appName, () => App);
    AppRegistry.runApplication(
        appName,
        {
            initialProps: {},
            rootTag: document.getElementById("root")
        }
    );
});
