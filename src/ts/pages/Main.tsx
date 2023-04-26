import { Outlet, Link } from "react-router-dom";
import ConfirmButton from "../comps/ConfirmButton";

export default async function Main() {
    return (<>
        <h1><Link to="calc1">Hello</Link></h1>
        <ConfirmButton text="Yeeee" href="#" size={1.5}/>
        <Outlet/>
    </>)
}
