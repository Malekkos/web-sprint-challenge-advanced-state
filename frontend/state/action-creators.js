// ❗ You don't need to add extra action creators to achieve MVP

import axios from "axios"
import { SET_SELECTED_ANSWER, RESET_FORM, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE} from "./action-types"

export function moveClockwise() {
  return {type: MOVE_CLOCKWISE, payload: 1}
 }

export function moveCounterClockwise() {
  return {type: MOVE_COUNTERCLOCKWISE, payload: 1}
 }


export function selectAnswer(answer) {
  return {type: SET_SELECTED_ANSWER, payload: answer }
 }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() {
  return {type: RESET_FORM}
 }

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    console.log("IM IN HERE")
    dispatch(resetForm())
    axios.get("http://localhost:9000/api/quiz/next")
    .then(res => {
      console.log(".then")
      console.log(res)
      dispatch(SET_QUIZ_INTO_STATE)
    })
    .catch(err => {
      console.log("there was an issue...", err)
    })
  }
// }
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
