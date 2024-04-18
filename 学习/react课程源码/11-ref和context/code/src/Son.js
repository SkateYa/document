import React from 'react';
import GrandSon from './grandSon';
class Son extends React.PureComponent {
    state = {
        sonMes: "子组件"
    }
    f1 () {
        console.log(1)
    }
    render () {
        return (
            <>
                <div className="Son">
                    {this.state.sonMes}
                </div>
                <GrandSon></GrandSon>
            </>
        );
    }
}

export default Son;
