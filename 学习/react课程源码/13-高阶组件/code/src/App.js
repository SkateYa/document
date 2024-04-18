import { useState, useEffect, useMemo, useCallback, useRef, useContext } from "react"
import React from "react";
import TestHoc from "./TestHoc";
import Son from "./Son.js"
import MemoHoc from "./MemoHoc";
let HocSon = TestHoc(Son);
let MemSon = MemoHoc(Son);

function App () {
    let [num, setNum] = useState(0);
    return <div>
        {num};
        <button onClick={() => {
            setNum(99)
        }}>修改</button>
        {/* <HocSon></HocSon> */}
        <MemSon></MemSon>
    </div>
}
export default App;
