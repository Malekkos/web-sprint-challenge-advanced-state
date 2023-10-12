// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case (MOVE_CLOCKWISE): {
    const newIndex = state + 1
    return newIndex > 5 ? 0 : newIndex
    }
  case (MOVE_COUNTERCLOCKWISE): {
    const newIndex = state - 1
    return newIndex < 0 ? 5 : newIndex
  }
  default: 
  return state
  };
}
//{quiz_id: "jbdrc", question: "What is a closure?", answers: [{ answer_id: "rhqys", test: "A function plus its bindings"}, { answer_id: "igjrg", test: "Clearly some kind of elephant"}]}
const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case(SET_QUIZ_INTO_STATE): {
      console.log("Setting quiz into state", action.payload)
      return action.payload
    }
    default: 
  return state
  } 
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case(SET_SELECTED_ANSWER): {
      console.log(action.payload)
      return action.payload
    }
    default:
    return state
  }
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
