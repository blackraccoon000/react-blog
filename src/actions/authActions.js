import { firebase, googleAuthProvider } from "../firebase/firebase"

const login = (info) => {
  const { uid, message } = info
  return {
    type: "LOGIN",
    uid,
    message
  }
}

const googleLogin = () => {
  return  () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

const logout = (message) => ({
  type: "LOGOUT",
  message
})

const googleLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}

export { login, logout, googleLogin, googleLogout }