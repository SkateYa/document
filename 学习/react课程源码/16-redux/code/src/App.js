import logo from './logo.svg';
import './App.css';
import "./store/index"
import { changeMes } from './store/toolkitIndex';
// import store from './store/index';
// let state = store.getState();
import { connect } from 'react-redux';
function App (props) {
    console.log(props);
    return (
        <div className="App">
            {props.mes};
            {/* <button onClick={() => {
                store.dispatch({
                    type: "changeMes",
                    payload: "world"
                })
                console.log(store.getState());
            }}>修改state</button> */}
            <button onClick={() => {
                props.changeMes();
            }}>修改state</button>
        </div>
    );
}
//connect-第一个参数state的映射，你要把哪些state映射到该组建的props里
//connect-第二个参数方法映射,你要给props里加入哪些方法
let ReduxApp = connect((state) => {
    console.log(state);
    //一定要return对象
    return {
        mes: state.mesReducer.mes
    }
}, (dispatch) => {
    return {
        changeMes () {
            // dispatch({
            //     type: "mesSlice/changeMes",
            //     payload: "world"
            // })
            //toolkit的触发方法
            dispatch(changeMes("world"))
        }
    }
})(App)
export default ReduxApp;
