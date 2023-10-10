import React, { useEffect } from 'react'

import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import { connect } from 'react-redux'


function Wheel({ moveClockwise, moveCounterClockwise, wheel}) {

  // useEffect(() => {
  //   const wheelWrapper = document.getElementById("wheel")
  //   const wheelRemover = document.getElementById("wheel")
    
  //   // console.log(wheelRemover)

  //   // console.log(wheelWrapper.children[`${wheel.wheel}`])
  //   wheelWrapper.children[`${wheel.wheel}`].className = "cog active"
  //   wheelWrapper.children[`${wheel.wheel}`].textContent = "B"
  //   wheelRemover.children[remover].className = "cog"
  //   wheelRemover.children[remover].textContent = ""
  //   console.log("rendered")
  // }, [wheel])

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
        <button id="counterClockwiseBtn" onClick={() => moveCounterClockwise()} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => moveClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  // console.log(state.wheel.wheel)
  return {
    wheel: state.wheel,
  }
}


export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel)