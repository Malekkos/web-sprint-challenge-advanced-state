// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'

const initialWheelState = 0 

function wheel(state = initialState, action) {
  switch (action.type) {
    case (MOVE_CLOCKWISE): {
      console.log(state)
      if( state.wheel === 5) {
      return{
        ...state,
        wheel: 0
      }
      } else {
      return {
      wheel: state.wheel + action.payload
      }
      }
      }
    case (MOVE_COUNTERCLOCKWISE): {
      if ( state.wheel === 0) {
        return {
          ...state, 
          wheel: 5
      }
      } else {
      return {
        ...state,
        wheel: state.wheel - action.payload
      }
      }
      }
      default:
        return state
      }
      
    }
    
const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
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
const initialState = {
  wheel: initialWheelState,
  quiz: initialQuizState,
  selectedAnswer: initialSelectedAnswerState,
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
