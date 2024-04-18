import { Outlet, useNavigate } from "react-router-dom"
function Page2() {
    let nav = useNavigate()
    return <div>
        this is page2
        <button onClick={() => {
            nav("/page1", {
                state: {
                    state1: "hello"
                }
            })
        }}>跳转到page1</button>
        <Outlet></Outlet>
    </div>
}
export default Page2