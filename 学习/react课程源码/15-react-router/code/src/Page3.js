// /page3?a=123&b=456-query
import { useParams } from "react-router-dom"
function Page3() {
    let params = useParams()

    return <div>this is page3</div>
}
export default Page3