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

const tempClear = () => {
  return {
    type:"TEMP_CLEAR",
    title:"",
    note:""
  }
}

export { tempTitle, tempNote, tempClear }