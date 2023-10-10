// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_COUNTERCLOCKWISE_REMOVER, MOVE_CLOCKWISE_REMOVER, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'

const initialWheelState = 0 

function wheel(state = initialState, action) {
  switch (action.type) {
    case (MOVE_CLOCKWISE): {
      if( state.wheel === 5) {
      return{
        ...state,
        wheel: 0
      }
      } else {
      return {
      ...state,
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
    const initialWheelStateRemover = 5
    
    function wheelRemover(state = initialState, action) {
      switch(action.type) {
        case (MOVE_CLOCKWISE_REMOVER): {
          
          if( state.wheelRemover === 5) {
          return{
            ...state,
            wheelRemover:  0
          }
          } else {
          return {
            ...state, 
          wheelRemover: state.wheelRemover + action.payload
          }
          }
          }
        case (MOVE_COUNTERCLOCKWISE_REMOVER): {
          wheelRemover = wheelRemover + 2
          if ( state.wheelRemover === 0) {
            return {
              ...state, 
              wheelRemover: 5
          }
          } else {
          return {
            ...state,
            wheelRemover: state.wheelRemover - action.payload
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
  wheelRemover: initialWheelStateRemover,
}

export default combineReducers({ wheelRemover, wheel, quiz, selectedAnswer, infoMessage, form })
