import logo from './logo.svg';
import './App.css';
import React from 'react';
import Son from "./Son"
let div1 = React.createRef()
let sonCom = React.createRef();
export let Context1 = React.createContext();
class App extends React.PureComponent {
    state = {
        mes: "父组件",
        passMes: "我是一个传递的消息"
    }
    div1 = React.createRef()
    componentDidMount () {
        //废弃
        // console.log(this.refs.div1)
        console.log(div1.current);
        console.log(sonCom.current)
    }
    render () {
        return (
            <>
                <div className="App" ref={div1}>
                    {this.state.mes}
                </div>
                {/* 只能有value这一个props */}

                <Context1.Provider value={{ mes1: this.state.passMes, mes2: "123" }}>
                    <Son ref={sonCom}></Son>
                </Context1.Provider>

            </>
        );
    }
}

export default App;
