import React, { useEffect } from 'react'

import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import { connect } from 'react-redux'


function Wheel({ moveClockwise, moveCounterClockwise, wheel, wheelReverse}) {
  // console.log(wheel, wheelReverse)
  // useEffect(() => {
    
  // })
  const buttonCounter = () => {
    const wheelWrapper = document.getElementById("wheel")
    // const wheelRemover = document.getElementById("wheel")
    
    wheelWrapper.children[`${wheel}`].className = "cog active"
    wheelWrapper.children[`${wheel}`].textContent = "B"
    wheelWrapper.children[`${wheelReverse}` - 1].textContent = ""
    wheelWrapper.children[`${wheelReverse}` - 1].className = "cog"
  }
  const buttonClockwise = () => {
    const wheelWrapper = document.getElementById("wheel")
    
    wheelWrapper.children[`${wheel}`].className = "cog active"
    wheelWrapper.children[`${wheel}`].textContent = "B"
    wheelWrapper.children[`${wheelReverse}` + 1].textContent = ""
    wheelWrapper.children[`${wheelReverse}` + 1].className = "cog"
  }
  // console.log(wheel)
  
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() =>  moveCounterClockwise() && buttonCounter() } >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => moveClockwise() && buttonClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.wheel)
  return {
    wheel: state.wheel.wheel,
    wheelReverse: state.wheel.wheelReverse
  }
}


export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel)