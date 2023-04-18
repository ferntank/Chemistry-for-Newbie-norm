import init, { } from "backend";

const App = async () => {
    await init();
    return (<>
        <h1>Hello, world!</h1>
    </>)
}

export default App;
