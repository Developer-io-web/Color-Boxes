import React, { Component } from 'react'
import Box from "./Boxes"
import "./Boxes.css"

class ColorBox extends Component {
    render(){
        console.log(this.props);
        
        const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
        const arr = range(1,this.props.maxBox,1);
        console.log(arr);
        return(
            <div>
                <h1 className="center">Color Game</h1>
                <div class="flex">{arr.map(m=> <Box/>)};</div>
                </div>
        )
    }
}

export default ColorBox;