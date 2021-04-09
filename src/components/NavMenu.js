import React from "react"
import { connect } from "react-redux"
import { login, logout } from "../actions/authActions"
import { firebase, googleAuthProvider } from "../firebase/firebase"
import { NavLink } from "react-router-dom"

class NavMenu extends React.Component {
  constructor(props){
    super(props)
  }
  onSignIn = () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(result => {
      const uid = process.env.FIREBASE_LOGIN_UID
      if(result.user.uid === uid) {
        const info = {
          uid:result.user.uid,
          message:"SignInに成功しました。"
        }
        this.props.getUid(info)
      }
    })
    .catch(error => console.log("SignInに失敗しました:",error))
  }
  onSignOut = () => {
    firebase.auth().signOut()
    .then(_ => {
      this.props.releaseUid("SignOutに成功しました。")
    })
  }
  render() {
    return (
      <div className="navMenu">
        <ul data-testid="navMenuBar">
          <li><NavLink activeClassName="is-active" to="/" data-testid="HomeLink">Home</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/create" data-testid="CreateLink">Create</NavLink></li>
        </ul>
        { this.props.isAuthenticated ?
          <button className="google button button--login" onClick={this.onSignOut}>
            Sign Out
          </button>
          :
          <button className="google button button--login" onClick={this.onSignIn}>
            Sign In
          </button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = dispatch => ({
  getUid: (info) => dispatch(login(info)),
  releaseUid: (message) => dispatch(logout(message))
})

export default connect( mapStateToProps, mapDispatchToProps )( NavMenu )
export { NavMenu }
