import init, { add } from "backend";

async function run(l: number, r: number) {
    await init();
    return add(l, r)
}

const App = async () => {
    let ans: number = await run(23452345, 3498576);
    return (<>
        <h1>The result is: {ans}</h1>
    </>)
}

export default App;
