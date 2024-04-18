import React from 'react';
import "./App.css"
import axios from "axios"
import Pop from "./Pop"
let arr = [{ text: "进行中", color: "blue" },
{ text: "已完成", color: "green" },
{ text: "已延期", color: "red" }]
let dateValue = ""
let nameValue = ""
let statusValue = ""
class App extends React.Component {
  state = {
    tableArr: [],
    searchParams: {
      date: "",
      name: "",
      status: ""
    },
    popForm: {
      date: "",
      name: "",
      status: ""
    },
    popShow: false,
    popTitle: undefined,
  }
  componentDidMount() {
    this.getList();
  }
  getList(params) {
    axios({
      url: "http://localhost:8000/list",
      method: "get",
      params: params
    }).then((res) => {
      this.setState({
        tableArr: res.data.data
      })

    })
  }
  showStatus(status) {
    return <span style={{
      color: arr[status].color
    }}> {arr[status].text}</span >
  }
  searchData() {
    this.getList(this.state.searchParams)
  }
  addFn() {
    axios({
      url: "http://localhost:8000/addOrder",
      method: "post",
      data: this.state.popForm,
    }).then((res) => {
      this.setState({
        popShow: false
      })
      this.getList();
    })
  }
  changeFn() {
    axios({
      url: "http://localhost:8000/updateOrder",
      method: "post",
      data: this.state.popForm,
    }).then((res) => {
      this.setState({
        popShow: false
      })
      this.getList();
    })
  }
  deleteOrder(id) {
    axios({
      url: "http://localhost:8000/deleteOrder",
      method: "post",
      data: {
        id: id
      }
    }).then((res) => {
      this.getList();
    })
  }
  render() {
    return <div>
      <div>
        <label>日期</label>
        <input value={this.state.searchParams.date} onInput={(e) => {
          this.setState({
            searchParams: {
              ...this.state.searchParams,
              date: e.target.value
            }
          })
        }} />
        <label>订单名</label>
        <input value={this.state.searchParams.name} onInput={(e) => {
          this.setState({
            searchParams: {
              ...this.state.searchParams,
              name: e.target.value
            }
          })
        }} />
        <label>订单状态</label>
        <select value={this.state.searchParams.status} onChange={(e) => {
          this.setState({
            searchParams: {
              ...this.state.searchParams,
              status: e.target.value
            }
          })
        }}>
          {
            arr.map((item, index) => {
              return <option key={item.text} value={index}>{item.text}</option>
            })
          }
        </select>
        <button onClick={this.searchData.bind(this)}>搜索</button>
        <button onClick={() => {
          //state的修改是异步
          this.setState({
            searchParams: {
              date: "",
              name: "",
              status: ""
            }
          }, () => {
            this.getList(this.state.searchParams)
          })

        }}>重置</button>
      </div>
      <div>
        <button onClick={() => {
          this.setState({
            popShow: true,
            popTitle: "新增",
            confirmFn: this.addFn.bind(this),
          })
        }}>新增</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>日期</td>
            <td>订单名</td>
            <td>订单状态</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.tableArr.map((item, index) => {
              return <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>
                  {this.showStatus(item.status)}
                </td>
                <td>
                  <button onClick={this.deleteOrder.bind(this, item.id)}>删除</button>
                  <button onClick={() => {
                    this.setState({
                      popShow: true,
                      popForm: item,
                      popTitle: "修改",
                      confirmFn: this.changeFn.bind(this)
                    })
                  }}>编辑</button></td>
              </tr>
            })
          }
          <tr></tr>
        </tbody>
      </table>
      {
        this.state.popShow ? <Pop
          title={this.state.popTitle}
          confirm={this.state.popTitle == "新增" ? this.addFn.bind(this) : this.changeFn.bind(this)}
        >
          <div>
            <div>
              <label>日期</label>
              <input value={this.state.popForm.date} onInput={(e) => {
                this.setState({
                  popForm: {
                    ...this.state.popForm,
                    date: e.target.value
                  }
                })
              }} />
            </div>
            <div>
              <label>订单名</label>
              <input value={this.state.popForm.name} onInput={(e) => {
                this.setState({
                  popForm: {
                    ...this.state.popForm,
                    name: e.target.value
                  }
                })
              }} />
            </div>
            <div>
              <label>状态</label>
              <select value={this.state.popForm.status} onChange={(e) => {
                this.setState({
                  popForm: {
                    ...this.state.popForm,
                    status: e.target.value
                  }
                })
              }}>
                {
                  arr.map((item, index) => {
                    return <option key={item.text} value={index}>{item.text}</option>
                  })
                }
              </select>
            </div>
          </div>
        </Pop> : ""
      }

    </div>
  }
}

export default App;
