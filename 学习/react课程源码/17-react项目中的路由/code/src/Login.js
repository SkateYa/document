

import axios from "axios"
import { getRoutes } from "./store/userInfo";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login () {
    let username = "";
    let password = "";
    let nav = useNavigate();
    let dispatch = useDispatch()
    function sendLogin () {
        axios.post("http://localhost:8000/loginIn", { username: username, password: password }).then((res) => {
            if (res.data.mes == '登录成功') {
                localStorage.setItem("id", res.data.id);
                dispatch(getRoutes(res.data.id));
                nav("/page2")
            }
        })
    }
    return <div>
        <label>用户名：</label><input onInput={(e) => { username = e.target.value }}></input>
        <label>密码：</label><input onInput={(e) => { password = e.target.value }}></input>
        <button onClick={sendLogin}>登录</button>
    </div>
}
export default Login