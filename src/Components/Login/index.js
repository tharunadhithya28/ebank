import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
  }

  listenId = event => {
    this.setState({userId: event.target.value})
  }

  listenPin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const {userIdInput, pinInput} = this.state
    return (
      <>
        <div className="login-left">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
        </div>
        <div>
          <h1> Welcome Back!</h1>
          <form onSubmit={this.onSubmitForm}>
            <div>
              <label htmlFor="userid"> User ID </label>
              <input
                type="text"
                placeholder="Enter User ID"
                id="userid"
                onChange={this.listenId}
                value={userIdInput}
              />
            </div>
            <div>
              <label htmlFor="pin"> PIN </label>
              <input
                type="password"
                placeholder="Enter PIN"
                id="pin"
                onChange={this.listenPin}
                value={pinInput}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    )
  }
}
export default Login
