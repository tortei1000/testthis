import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios';
import { updateUsername } from "../ducks/auth_reducer"
import Topics from './Topics'
import Search from './Search';




class Home extends Component {
  constructor() {
    super()
    this.state = {
      users: {id:""},
      newName: ""
      
    }
  }
  componentDidMount() {
    axios.get('/auth/users').then((res) => {
      this.props.updateUsername(res.data.username)
    }).catch((err) => { console.log(err) })
  }

  handleChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  editUser = () => {
    const { newName } = this.state
    axios.put(`/auth/users/${this.props.match.params.id}`, { newName }).then(() => {
      
    })
  }

  search = (text) => {
    console.log(text)
    axios.get(`/auth/users/?title=${text}`).then(res => {

      this.setState({
        users: res.data,
        
      })
    }).catch(err => console.log("error", err))

  }

  render() {
    
    console.log(this.props)

    return (
      <div>
        {this.props.username ? (
          <div>
            <h2 className="header_title">
              You are special, look at this css supah styling...
            </h2>
              <input name="newName" type="text" placeholder="new user name" onChange={this.handleChange}/>
              <button onClick={this.editUser}>submit</button>
              <Search search={this.search}/>
              {this.state.users.id}
              <Link to='/Topics'>Topics</Link>
            
            
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