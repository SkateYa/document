import { legacy_createStore as createStore, combineReducers } from "redux";
function mesReducer (state = { mes: "hello" }, action) {
    //具体修改数据的行为
    switch (action.type) {
        case 'changeMes':
            //payload，也可以叫其他名字
            state.mes = action.payload;
            //最后一定要return state，并且展开解除引用
            return { ...state }
        case 'resetMes':
            state.mes = "hello";
            return { ...state }
        default:
            return state
    }
}
function numReducer (state = { num: 0 }, action) {
    switch (action.type) {
        case 'addNum':
            state.num += 1;
            return { ...state }
        default:
            return state
    }
}
let reducer = combineReducers({
    mesReducer,
    numReducer
})
let store = createStore(reducer)
export default store;
