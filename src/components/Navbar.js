import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../ducks/auth_reducer'
import axios from 'axios'



class Navbar extends Component {
    constructor() {
        super()
        this.state = {

            open: [false, true, false, true]

        }
    }

    handleClick(id) {
        let { open } = this.state;
        this.setState({
            open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
        });
    }

    render() {
        const { username } = this.props
        return (

            <nav>
                <div className="app_name_logout_container">
                    <span className="app_name_container">Test This</span>
                    
                    {username && <div>Welcome, {username}  <button className="logout_button" onClick={() => {
                        this.props.logout()
                        axios.get('/auth/logout').then(() => { this.props.history.push('/') })


                    }}>logout</button></div>}
                </div>

                {!this.props.username ? (
                    <ul className="login_register_container">
                        <li className="login_container">
                            <Link to='/login' className="login_text">Login</Link>
                        </li>
                        <li className="register_container">
                            <Link to='/register' className="register_text">Get Started</Link>
                        </li>
                    </ul>
                ) : (
                        <div className="menu_logout_container">
                            

                        </div>
                    )}



            </nav>
        )
    }
}
const mapDispatchToProps = {
    logout
}
const mapStateToProps = (reduxState) => {
    const { username } = reduxState
    return { username }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))