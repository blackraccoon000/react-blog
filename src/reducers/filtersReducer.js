const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", // text or date
  sortOrder: "ascending", // ascending , descending
  startDate: undefined,
  endDate: undefined,
  squeezeNum: null
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      }
    case "SORT_BY_TEXT":
      return {
        ...state,
        sortBy: "text"
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      }
    case "SORT_ORDER_ASCENDING":
      return {
        ...state,
        sortOrder: "ascending"
      }
    case "SORT_ORDER_DESCENDING":
      return {
        ...state,
        sortOrder: "descending"
      }
    case "SET_START_DATE":
      return {
        ...state,
        startDate:action.startDate,
      }
    case "SET_END_DATE":
      return {
        ...state,
        endDate:action.endDate
      }
    case "OUTPUT_ARRAY":
      return {
        ...state,
        squeezeNum: action.squeezeNum
      }
    default:
      return state
  }
}

export default filtersReducer