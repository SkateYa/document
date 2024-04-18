
import './App.css';
import React from 'react';

class App extends React.PureComponent {
  state = {
    a: 0,
    b: 1,
    c: {
      c1: 123,
      c2: 999
    },
    arr: [1, 2, 3]
  }
  addA = () => {
    // this.setState((state) => {
    //   return {
    //     a:++state.a
    //   }
    // })
    this.setState({
      a: 1,
    }, () => {
      //在这里面才能获取到更新后的值
      console.log(this.state.a)
    })

  }
  addArr() {
    //数组和对象-》判断是否改变-》内存地址判断的
    let _arr = [...this.state.arr]
    _arr.push(4);
    this.setState({
      arr: _arr
    }, () => {
      //此时内容变了，但是内存地址没变
      console.log(this.state.arr)
    })

    this.setState({
      c: {
        ...this.state.c,
        c1: 888
      }
    })
  }
  render() {
    return <div className="App">
      {this.state.a}
      <button onClick={this.addA}>加21</button>
      c数据的内容
      <div>
        {this.state.c.c1}
      </div>
      <div>
        {this.state.c.c2}
      </div>
      数组
      <div>
        {this.state.arr}
      </div>
      <button onClick={this.addArr.bind(this)}>添加数组</button>
    </div>
  }
}

export default App;
