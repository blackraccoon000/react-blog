const tempState = {
  title:"",
  note:""
}

const tempReducer = (state = tempState, action) => {
  switch(action.type) {
    case "TEMP_TITLE":
      return {
        title: action.title,
        note: state.note
      }
    case "TEMP_NOTE":
      return {
        title: state.title,
        note: action.note
      }
    case "TEMP_CLEAR":
      return {
        title: action.title,
        note: action.note
      }
    default:
      return state
  }
}

export default tempReducer