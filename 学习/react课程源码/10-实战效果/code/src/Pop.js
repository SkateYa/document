import React from "react";
import popStyle from "./Pop.module.css"
class Pop extends React.PureComponent {
    //html内容-插槽 文字-props
    render() {
        return <div className={popStyle.cover}>
            <div className={popStyle.content}>
                {/* <div className={popStyle.title}>{this.props.title ? this.props.title : "标题"}</div> */}
                <div className={popStyle.title}>{this.props.title}</div>
                <div>
                    {this.props.children}
                </div>
                <div>
                    <button onClick={() => { this.props.confirm() }}>确定</button>
                    <button onClick={() => { this.props.cancel() }}>取消</button>
                </div>
            </div>

        </div>
    }
}
Pop.defaultProps = {
    title: "标题"
}
export default Pop