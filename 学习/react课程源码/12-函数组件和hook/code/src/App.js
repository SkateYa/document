import Son from "./Son.js"
import { useState, useEffect, useMemo, useCallback, useRef, useContext } from "react"
import React from "react";
//vue3-ref,reactive
export let Context1 = React.createContext();
function App () {
    //相当于render函数
    //return 的内容相当于组建的html
    //state
    let [msg, setMsg] = useState("hello");
    let [msg2, setMsg2] = useState("msg2")
    let [arr, setArr] = useState([1, 2, 3]);
    let dom1 = useRef();
    let all = useMemo(() => {
        console.log("recount")
        let _all = 0;
        arr.forEach((item) => {
            _all += item;
        })
        return _all
    }, [arr])
    // let obj = useMemo(() => {
    //     return {
    //         a: 123
    //     }
    // })
    let changeMes = useCallback(() => {
        setMsg("hello11");
    }, [arr])
    //useMemo,useEffect,useCallback第二个参数的作用都是一样的
    function changeArr () {
        let _arr = [...arr];
        _arr.push(2);
        setArr(_arr)
    }
    //第一个参数是一个回调函数-必填
    //vue-watch默认是不会开始就执行的，
    //useEffect监听某个数据，开始就会执行一次（didMount）
    useEffect(() => {
        console.log("effect")
    }, [msg])
    useEffect(() => {
        console.log(dom1)
    }, [])
    return <div>
        this is App
        <div>
            {msg}
        </div>
        <div>
            {msg2}
        </div>
        <div>
            {all}
        </div>
        <div>{arr}</div>
        <button ref={dom1} onClick={changeMes}>修改</button>
        <button onClick={() => { setMsg2("aaa") }}>修改msg2</button>
        <button onClick={changeArr}>修改arr</button>
        <Context1.Provider value='i am context value'>
            <Son fatherMes="i am father"></Son>
        </Context1.Provider>

    </div>
}

export default App;
