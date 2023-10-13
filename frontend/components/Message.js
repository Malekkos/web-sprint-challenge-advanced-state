import React from 'react'

import { connect } from 'react-redux'

function Message(message) {
  console.log(message.message)
  return <div id="message">{message.message}</div>
}

const mapStateToProps = state => {
  return {
    message: state.infoMessage
  }
}

export default connect(mapStateToProps, {})(Message)