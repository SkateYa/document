import React from 'react';
import Son from './Son';
import "./App.css"
class App extends React.PureComponent {
  state = {
    mes: "asdas"
  }

  render() {
    return (
      <div>
        <div className='father son' style={
          {
            color: "white",
            fontSize: "20px"
          }
        }>father</div>
        <Son></Son>
      </div >
    )
  }
}

export default App;
