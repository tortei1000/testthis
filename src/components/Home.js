import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios';
import { updateUsername } from "../ducks/auth_reducer"




class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    axios.get('/auth/users').then((res) => {
      this.props.updateUsername(res.data.username)
    }).catch((err) => { console.log(err) })
  }

  render() {



    return (
      <div>
        {this.props.username ? (
          <div>
            <h2 className="header_title">
              You are special, look at this css supah styling...
            </h2>
            
            
          </div>
        ) : (
          <>
            <div className='toggleSlider'>
              YOU HAVE YET TO LOG IN... PLEASE DO SO.
            </div>
            
          </>
          )}

      </div>
    )

  }

}
const mapDispatchToProps = {
  updateUsername
}

const mapStateToProps = (reduxState) => {
  const { username } = reduxState
  return { username }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))