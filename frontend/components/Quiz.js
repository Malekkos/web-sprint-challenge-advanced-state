import React, { useEffect} from 'react'
import axios from "axios"
import { fetchQuiz } from '../state/action-creators'
import { useDispatch, connect } from 'react-redux'



function Quiz(fetchQuiz) {
  const dispatch = useDispatch()
  // fetchQuiz.fetchQuiz()
  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      const data = await fetchQuiz.fetchQuiz();
      if (data) {
        // Dispatch an action to update the Redux store with the fetched data
        dispatch(fetchUserData(data));
      }
    }
    fetchDataAndDispatch()

    }, [])


  // componentDidMount()

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

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
  console.log(state.quiz)
  // const { quiz } = state.quiz
  return {

  }
}

export default connect(mapStateToProps, { fetchQuiz })(Quiz)