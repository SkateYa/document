import { useContext } from "react";
import { Context1 } from "./App";
function Son (props) {
    // console.log(props);
    let value = useContext(Context1);
    console.log(value);
    return <div>this is son</div>
}
export default Son;