// ❗ You don't need to add extra action creators to achieve MVP

import axios from "axios"
import { RESET_FORM, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, MOVE_CLOCKWISE_REMOVER, MOVE_COUNTERCLOCKWISE_REMOVER } from "./action-types"

export function moveClockwise() {
  
  return {type: MOVE_CLOCKWISE, payload: 1}
 }

export function moveCounterClockwise() {
  return {type: MOVE_COUNTERCLOCKWISE, payload: 1}
 }
 export function moveCounterClockwiseRemover() {
  return {type: MOVE_COUNTERCLOCKWISE_REMOVER, payload: 1}
 }
 export function moveClockwiseRemover() {
  return {type: MOVE_CLOCKWISE_REMOVER, payload: 1}
 }

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() {
  return {type: RESET_FORM}
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch(resetForm())
    axios.get("http://localhost:9000/api/quiz/next")
    .then(res => {
      dispatch()
    })
  }
}
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
