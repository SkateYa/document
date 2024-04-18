import Son from "./Son.js"
import { useState, useCallback, useMemo } from "react"
import React from "react";
import "./App.css"
let MemoSon = React.memo(Son);
function App() {
  //useMemo,useCallback

  let [num, setNum] = useState(0);
  //引用类型-》是否相等-》内存地址
  //更新num-》app组件更新-》重新执行App方法-》重新定义了obj和f1
  let obj = useMemo(() => {
    return { a: 1 }
  }, [])
  let f1 = useCallback(function () {
    console.log(123)
  }, [])

  return (
    <div className="App">
      {num}
      <button onClick={() => {
        setNum(++num);
      }}>增加</button>
      <h1>父组件</h1>
      <MemoSon obj={obj} f1={f1}></MemoSon>
    </div>
  );
}

export default App;
