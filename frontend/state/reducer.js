// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, RESET_QUIZ_STATE, INPUT_CHANGE, RESETTER} from './action-types'

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
      // console.log("Setting quiz into state", action.payload)
      return action.payload
    }
    case(RESET_QUIZ_STATE): {
      return null
    }
    default: 
  return state
  } 
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case(SET_SELECTED_ANSWER): {
      if (action.payload == "reset") {
        return null
      } else {
      console.log("reducer, set Selecter answer", action.payload)
      return action.payload
      }
    }
    default:
    return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case(SET_INFO_MESSAGE): {
      console.log("This is the info message: ",action.payload)
      return action.payload
    }
    default:
    return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
 switch(action.type) {
  case(INPUT_CHANGE): {
    // console.log(state.newQuestion)
    // console.log(action.payload)
    // console.log(state)
    return action.payload
  }
  default:
  return state
}
}
const initialResetter = false
function resetter (state = initialResetter, action) {
  switch(action.type) {
    case(RESETTER): {
      return !state
    }
    default:
      return state
  }
}

export default combineReducers({wheel, quiz, selectedAnswer, infoMessage, form, resetter })
