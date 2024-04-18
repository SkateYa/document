import logo from './logo.svg';
import './App.css';
import React from 'react';
 
class App extends React.Component {
  //1，给方法调用bind规定this，2，写成一个匿名箭头函数 3，方法本身写成箭头函数
  f1 = (a, b, e) => {
    //并不是原生，而是合成 的事件对象
    console.log(e.stopPropagation())
  }
  render() {
    return <div className="App">
      {/* <div onClick={this.f1.bind(this)}>123</div> */}
      {/* <div onClick={function(){
        console.log(this);
      }}>匿名</div> */}
      <div onClick={this.f1.bind(this,1,2)}>123</div>
    </div>
   }
}

export default App;
