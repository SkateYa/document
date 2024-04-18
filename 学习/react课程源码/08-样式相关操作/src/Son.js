import React from "react";
import proptypes from "proptypes";
import sonStyle from "./son.module.css"
//更方便帮助我们操作类名的库-classnames
//本质是，帮助我们生成一个字符串

//如果要配合模块化,要引入classnames的bind文件夹
import classnames from "classnames/bind";
let bindClassnames = classnames.bind(sonStyle);

//组件名-moudle.css
//vue style scope
class Son extends React.PureComponent {

    state = {
        sonMes: "hello",
        hasSon1: false
    }
    render() {

        return <div>
            <div className={bindClassnames({
                son: true,
                son1: this.state.hasSon1
            })}>son</div>
            <button onClick={() => {
                this.setState({
                    hasSon1: true
                })
            }}>添加son1</button>
            <button onClick={() => {
                this.setState({
                    hasSon1: false
                })
            }}>移除son1</button>
        </div>
    }
}
//proptypes
Son.propTypes = {
    mes: proptypes.string,
}
Son.defaultProps = {
    mes: "i am default",
    a: "asd"
}
export default Son;