
import './App.css';
import React from 'react';

class App extends React.PureComponent {
  state = {
    show: true,
    originArr: [1, 2, 3]//[1,2,3]=>[<div>1</div>,<div>2</div>,<div>3</div>]
  }
  f1() {
    if (this.state.show) {
      return <div>div1</div>
    } else {
      return "";
    }
  }
  getArr() {
    //for,map-最常用，filter
    let newArr = [];
    this.state.originArr.forEach((item) => {
      newArr.push(<div>{item}</div>)
    })
    console.log(newArr);
    return newArr;
  }
  addData = () => {
    let _arr = [...this.state.originArr];
    _arr.push(Math.random() * 10);
    this.setState({
      originArr: _arr
    })
  }
  render() {
    return <div className="App">
      <div>条件渲染</div>
      {/* {this.state.show && <div>div1</div>} */}
      {this.f1()}
      <button onClick={() => {
        this.setState({
          show: !this.state.show
        })
      }}>{this.state.show ? "隐藏" : "显示"}</button>
      <div>列表渲染</div>
      {/* {this.getArr()} */}
      {
        this.state.originArr.map((item) => {
          return <div key={item}>{item}</div>
        })
      }
      <button onClick={this.addData}>添加</button>
    </div>
  }
}

export default App;
