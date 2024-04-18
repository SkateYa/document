//location
import { useLocation } from "react-router-dom"
function Page1() {
    let location = useLocation();
    console.log(location);
    return <div>this is page1</div>
}
export default Page1