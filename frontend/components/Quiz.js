import React, { useEffect, useState } from 'react'
import axios from "axios"
import { fetchQuiz, selectAnswer } from '../state/action-creators'
import { useDispatch, connect } from 'react-redux'



function Quiz(fetchQuiz, quiz, selectAnswer) {

  const [selectedButton, setSelectedButton] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchDataAndDispatch = () => {
      const data = fetchQuiz.fetchQuiz();
      if (data) {
        dispatch(fetchUserData(data));
      }
    }
    fetchDataAndDispatch()
    }, [])
    console.log(fetchQuiz.quiz)

    const handleClick = (button) => {
      setSelectedButton(button)
    }
    console.log(selectAnswer)

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
      fetchQuiz.quiz == null ? 'Loading next quiz...' : (
          <>
            <h2>{fetchQuiz.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedButton == "button 1" ? "selected" : ""}`}>
                {fetchQuiz.quiz.answers[0].text}
                <button onClick={() => handleClick("button 1") && selectAnswer(fetchQuiz.quiz.answers[0].answer_id)}>
                  { selectedButton == "button 1" ? "SELECTED" : "select"}
                </button>
              </div>

              <div className={`answer ${selectedButton == "button 2" ? "selected" : ""}`}>
                {fetchQuiz.quiz.answers[1].text}
                <button onClick={() => handleClick("button 2") && selectAnswer(fetchQuiz.quiz.answers[1].answer_id)}>
                { selectedButton == "button 2" ? "SELECTED" : "select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log("State in mapStateToProps", state.quiz)
  return {
    quiz: state.quiz,
  }
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer })(Quiz)