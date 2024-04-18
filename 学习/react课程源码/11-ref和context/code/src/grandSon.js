import React from 'react';
import { Context1 } from './App';
class GrandSon extends React.PureComponent {
    state = {
        GrandSonMes: "孙子组件"
    }
    f1 () {
        console.log(1)
    }
    render () {
        return (
            <div className="GrandSon">
                {this.state.GrandSonMes}
                <Context1.Consumer>
                    {
                        (value) => {

                            return <div>{value.mes2}</div>
                        }
                    }
                </Context1.Consumer>
            </div>
        );
    }
}

export default GrandSon;
