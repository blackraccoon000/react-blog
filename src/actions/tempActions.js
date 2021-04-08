const tempTitle = (title = "") => {
  return {
    type:"TEMP_TITLE",
    title
  }
}

const tempNote = (note = "") => {
  return {
    type:"TEMP_NOTE",
    note
  }
}

const tempLink = (link = "") => {
  return {
    type:"TEMP_LINK",
    link
  }
}

const tempClear = () => {
  return {
    type:"TEMP_CLEAR",
    title:"",
    note:""
  }
}

export { tempTitle, tempNote, tempLink, tempClear }