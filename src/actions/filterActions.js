
const setText = (text = "") => {
  return {
    type:"SET_TEXT",
    text
  }
}

const sortByDate = () => {
  return {
    type:"SORT_BY_DATE"
  }
}

const sortByText = () => {
  return {
    type:"SORT_BY_TEXT"
  }
}

const sortOrderAscending = () => {
  return {
    type:"SORT_ORDER_ASCENDING"
  }
}

const sortOrderDescending = () => {
  return {
    type:"SORT_ORDER_DESCENDING"
  }
}

const setStartDate = (startDate) => {
  return {
    type:"SET_START_DATE",
    startDate
  }
}

const setEndDate = (endDate) => {
  return {
    type:"SET_END_DATE",
    endDate
  }
}

const setSqueezeNum = (squeezeNum) => {
  return {
    type:"OUTPUT_ARRAY",
    squeezeNum
  }
}

export { setText, sortByDate, sortByText, setStartDate, setEndDate,
  setSqueezeNum, sortOrderAscending, sortOrderDescending }