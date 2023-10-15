import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

const initialState = {
newQuestion: "",
newTrueAnswer : "",
newFalseAnswer: "",
}

export function Form(props) {
  
  const [enteredField, setEnteredField] = useState(props.form)
  useEffect(() => {
    props.inputChange(enteredField)
    
  }, [enteredField])

  const onChangeNewQuestion = event => {
    setEnteredField({...enteredField, newQuestion:event.target.value})
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
      <input maxLength={50} onChange={event => onChangeNewQuestion(event)} value={props.form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={event => onChangeNewTrueAnswer(event)} id="newTrueAnswer" value={props.form.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={event => onChangeNewFalseAnswer(event)} id="newFalseAnswer" value={props.form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={enteredField.newQuestion.trim() == "" || enteredField.newTrueAnswer.trim() == "" || enteredField.newFalseAnswer.trim() == ""} >Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
