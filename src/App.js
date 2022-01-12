import './App.css';
import React, { Component } from 'react'
import ColorBox from "./ColorBox"

class App extends Component {
  static defaultProps = {
    maxBox:15
  }
  render(){
    return(
      <div>
        <ColorBox maxBox={this.props.maxBox}/>
      </div>
    )
  }
}

export default App;
