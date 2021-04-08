import React from "react"
import { connect } from "react-redux"
import { login, logout } from "../actions/authActions"
import { firebase, googleAuthProvider } from "../firebase/firebase"

class LoginPage extends React.Component {
  constructor(props){
    super(props)
  }
  onSignIn = () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(result => {
      const uid = process.env.FIREBASE_LOGIN_UID
      if(result.user.uid === uid) {
        // this.props.getUid(result.user.uid,"Google認証 / App認証に成功しました。")
        const info = {
          uid:result.user.uid,
          error:"Success"
        }
        // this.props.getUid(result.user.uid,"Success")
        this.props.getUid(info)
      } else {
        this.props.getUid("","Google認証に成功しましたが権限がありません。")
      }
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
  // getUid: (uid) => dispatch(login(uid)),
  getUid: (info) => dispatch(login(info)),
  releaseUid: () => dispatch(logout())
})

export { LoginPage }
export default connect( mapStateToProps, mapDispatchToProps )(LoginPage)