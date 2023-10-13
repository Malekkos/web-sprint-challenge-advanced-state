import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

const initialState = {
newQuestion: "",
newTrueAnswer : "",
newFalseAnswer: "",
}

export function Form(props) {

  const [enteredField, setEnteredField] = useState(initialState)

  // console.log(props)
// console.log(enteredField)

  
  const onChangeNewQuestion = event => {
    console.log(event.target)
    // setEnteredField({...enteredField, newQuestion: event.target.value})
    setEnteredField({...enteredField, newQuestion:event.target.value})
    // props.inputChangeQuestion(enteredField)
  }
  const onChangeNewTrueAnswer = event => {
    setEnteredField({...enteredField, newTrueAnswer: event.target.value})
  }
  const onChangeNewFalseAnswer = event => {
    setEnteredField({...enteredField, newFalseAnswer: event.target.value})
  }
  const onSubmit = event => {
    event.preventDefault()
    props.postQuiz({"question_text": enteredField.newQuestion,"true_answer_text": enteredField.newTrueAnswer,"false_answer_text": enteredField.newFalseAnswer})
    setEnteredField(initialState)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={event => onChangeNewQuestion(event)} value={enteredField.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={event => onChangeNewTrueAnswer(event)} id="newTrueAnswer" value={enteredField.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={event => onChangeNewFalseAnswer(event)} id="newFalseAnswer" value={enteredField.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={enteredField.newQuestion.trim() == "" || enteredField.newTrueAnswer.trim() == "" || enteredField.newFalseAnswer.trim() == ""} >Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
