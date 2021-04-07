import { firebase, googleAuthProvider } from "../firebase/firebase"

const login = uid => ({
  type: "LOGIN",
  uid
})

const googleLogin = () => {
  return  () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

const logout = () => ({
  type: "LOGOUT"
})

const googleLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}

export { login, logout, googleLogin, googleLogout }