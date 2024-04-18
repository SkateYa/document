import React from "react"
export default function MemoHoc (UserCom) {
    return class extends React.Component {
        shouldComponentUpdate (props, state) {
            let shouldUpdate = false;
            for (let item in props) {
                if (this.props[item] !== props[item]) {
                    return shouldUpdate = true
                }
            }
            for (let item in state) {
                if (this.state[item] !== state[item]) {
                    return shouldUpdate = true
                }
            }
            return shouldUpdate;
        }
        render () {
            return <>
                <UserCom {...this.props}></UserCom>
            </>
        }
    }
}