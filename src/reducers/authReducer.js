export default (state = {uid:""}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid:action.uid,
        message:action.message
      }
    case "LOGOUT":
      return {
        message:action.message
      }
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}