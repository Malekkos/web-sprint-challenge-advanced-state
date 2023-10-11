// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, RESET_FORM } from './action-types'

const initialWheelState = {wheel: 5, wheelReverse: 1}
function wheel(state = initialWheelState, action) {
  // const wheelState = state
  // console.log(state)
  // state.wheel = 0
  // const wheelReverseClockwise = state - 1
  // const wheelReverseCounterClockwise = state + 1
  switch (action.type) {
    case (MOVE_CLOCKWISE): {
    if (state.wheel === 5) {
      return {
        ...state,
        wheel: 0,
        wheelReverse: state.wheelReverse - 1,
        // wheelReverse: 5

      }
    } else if (state.wheel === 0) {
      return {
      ...state, 
      wheel: 1,
      wheelReverse: 0 ,

    }
    } else {
      return {
        // console.log("WORKING")
        ...state,
        wheelReverse: state.wheel - action.payload,
        wheel: state.wheel + action.payload,

      }
    }
    }


  case (MOVE_COUNTERCLOCKWISE): {
    // console.log(state)
    // console.log(action.payload)
    if(state.wheel === 0) {
      return {
      ...state,
      wheel: 5,
      wheelReverse: state.wheelReverse - 1
    }  
    } else {
      return{
      ...state,
      wheelReverse: state.wheel + 1,
      wheel: state.wheel - action.payload,
  }  
  }
  }
  default: 
  return state
  };
}
const initialQuizState = null
function quiz(state = initialQuizState, action) {
  console.log(state)
  switch(action.type) {
    case(SET_QUIZ_INTO_STATE): {
      console.log("Setting quiz into state")
      return {
        ...state
      }
    }
    case(RESET_FORM): {
      
      return {
        ...state,
        quiz: null
      }
    }
    default: 
  return state
  } 
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}


export default combineReducers({wheel, quiz, selectedAnswer, infoMessage, form })
