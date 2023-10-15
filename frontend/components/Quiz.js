import React, { useEffect, useState } from 'react'
import axios from "axios"
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators'
import { useDispatch, connect } from 'react-redux'



function Quiz(fetchQuiz) {
  console.log(fetchQuiz.resetter)
  const [selectedButton, setSelectedButton] = useState(null)

  useEffect(() => {
    if(fetchQuiz.quiz == null) {
      fetchQuiz.fetchQuiz()
      console.log("how")
    } else {
      return
    }
    }, [fetchQuiz.resetter])

    const handleClick = (number) => {
      setSelectedButton(number)
      fetchQuiz.selectAnswer(fetchQuiz.quiz.answers[number - 1].answer_id)
    }
    const handleSubmit = () => {
      console.log("submitting...")
      fetchQuiz.postAnswer({"quiz_id": fetchQuiz.quiz.quiz_id, "answer_id": fetchQuiz.quiz.answers[selectedButton - 1].answer_id})
    }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
      fetchQuiz.quiz == null ? 'Loading next quiz...' : (
          <>
            <h2>{fetchQuiz.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedButton == 1 ? "selected" : ""}`}>
                {fetchQuiz.quiz.answers[0].text}
                <button onClick={() => {handleClick(1)}}>
                  { selectedButton == 1 ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={`answer ${selectedButton == 2 ? "selected" : ""}`}>
                {fetchQuiz.quiz.answers[1].text}
                <button onClick={() => {handleClick(2)}}>
                { selectedButton == 2 ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={() => handleSubmit()} disabled={selectedButton == null ? true: false}>Submit answer</button>
          </>
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    resetter: state.resetter
  }
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz)