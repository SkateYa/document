import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
// import Page4 from "./Page4"
import Page2Son1 from './Page2Son1';
import Page2Son2 from './Page2Son2';
import { lazy, Suspense } from "react"
let LazyPage4 = lazy(() => { return import("./Page4") })
function App() {
  let _token = localStorage.getItem("token");
  return (
    <div className="App">
      <div>
        <NavLink to="/page1">page1</NavLink>
        <NavLink to="/page2">page2</NavLink>
        <NavLink to="/page3">page3</NavLink>
        <NavLink to="/page4">page4</NavLink>
      </div>
      {/* react v5和v6是有比较大区别 */}
      {/* v5是switch */}
      {/*routes里只能放route，route也能放在routes里*/}
      <Suspense fallback={<h2>加载中</h2>}>
        <Routes>
          {/* v5是component */}
          {/* 通过navigate，直接不生成 */}
          {
            _token ?
              <Route path="/page1" element={<Page1></Page1>}></Route> :
              ""
          }

          <Route path="/page2" Component={Page2} >
            <Route path="son1" element={<Page2Son1></Page2Son1>}></Route>
            <Route path="son2" element={<Page2Son2></Page2Son2>}></Route>
          </Route>
          <Route path="/page3/:id" Component={Page3} ></Route>
          <Route path="/page4" Component={LazyPage4} ></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
