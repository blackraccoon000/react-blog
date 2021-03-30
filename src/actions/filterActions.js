
const setText = (text = 0) => {
  return {
    type:"SET_TEXT",
    text
  }
}

const sorByDate = () => {
  return {
    type:"SORT_BY_DATE"
  }
}

const sorByText = () => {
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

export { setText, sorByDate, sorByText, setStartDate, setEndDate,
  setSqueezeNum, sortOrderAscending, sortOrderDescending }