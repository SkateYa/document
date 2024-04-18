//hook的方式只能用于toolkit，只能用于函数组件
import { useSelector, useDispatch } from "react-redux";
import { addNum, changeNum, changeNumThunk } from "./store/toolkitIndex";
function App2 () {
    //取出state
    let num = useSelector((state) => { return state.numReducer.num })
    let dispatch = useDispatch();
    return <div>
        <span>{num}</span>
        <button onClick={() => {
            dispatch(addNum())
        }}>增加</button>
        <button onClick={() => {
            dispatch(changeNumThunk(1))
        }}>异步修改</button>
    </div>
}
export default App2;