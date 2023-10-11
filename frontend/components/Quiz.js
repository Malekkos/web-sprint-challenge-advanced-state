import React, { useEffect} from 'react'
import axios from "axios"
import { fetchQuiz } from '../state/action-creators'
import { useDispatch, connect } from 'react-redux'



function Quiz(fetchQuiz, answers, question, quiz_id) {
  const dispatch = useDispatch()
  // fetchQuiz.fetchQuiz()
  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      const data = await fetchQuiz.fetchQuiz();
      if (data) {
        dispatch(fetchUserData(data));
      }
    }
    fetchDataAndDispatch()

    }, [])


  // componentDidMount()
    console.log(question, ",", quiz_id, ",", answers)
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.quiz.quiz)
  console.log(state.quiz.quiz.quiz_id)
  console.log(state.quiz.quiz.question)
  // const { quiz } = state.quiz
  return {
    answers: [state.quiz.quiz.answers[0], state.quiz.quiz.answers[1]],
    question: state.quiz.quiz.question,
    quiz_id: state.quiz.quiz.quiz_id
  }
}

export default connect(mapStateToProps, { fetchQuiz })(Quiz)