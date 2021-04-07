import React from "react"
import { connect } from "react-redux"
import { googleLogin, login, logout } from "../actions/authActions"
import { firebase, googleAuthProvider } from "../firebase/firebase"

class LoginPage extends React.Component {
  constructor(props){
    super(props)
  }
  onSignIn = () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(result => {
      this.props.getUid(result.user.uid)
    })
  }
  onSignOut = () => {
    firebase.auth().signOut()
    .then(_ => {
      this.props.releaseUid()
    })
  }
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">
            { this.props.isAuthenticated ? "Now Login" : "No login"}
          </h1>
          <div className="box-layout__buttonArea">
          { this.props.isAuthenticated ?
            <button className="google button button--login" onClick={this.onSignOut}>
              <i className="fi-social-google-plus"></i> Sign Out
            </button>
            :
            <button className="google button button--login" onClick={this.onSignIn}>
              <i className="fi-social-google-plus"></i> Sign In
            </button>
          }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = dispatch => ({
  // googleLoginD: () => {
  //   console.log("bbbb")
  //   dispatch(googleLogin())
  // },
  getUid: (uid) => dispatch(login(uid)),
  releaseUid: () => dispatch(logout())
})

export { LoginPage }
export default connect( mapStateToProps, mapDispatchToProps )(LoginPage)