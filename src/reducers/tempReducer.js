const tempState = {
  title:"",
  note:"",
  link:""
}

const tempReducer = (state = tempState, action) => {
  switch(action.type) {
    case "TEMP_TITLE":
      return {
        title: action.title,
        note: state.note,
        link: state.link
      }
    case "TEMP_NOTE":
      return {
        title: state.title,
        note: action.note,
        link: state.link
      }
    case "TEMP_LINK":
      return {
        link: action.link
      }
    case "TEMP_CLEAR":
      return {
        title: state.title,
        note: state.note,
        link: state.link
      }
    default:
      return state
  }
}

export default tempReducer