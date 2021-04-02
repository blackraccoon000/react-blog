import { sortByDate, sortByText, sortOrderAscending, sortOrderDescending } from "../actions/filterActions"

const selectValueFilterFn = (e,dispatch) => {
  const value = e.target.value
  switch (value) {
    case "date":
      return dispatch(sortByDate())
    case "text":
      return dispatch(sortByText())
    case "ascending":
      return dispatch(sortOrderAscending())
    case "descending":
      return dispatch(sortOrderDescending())
    default:
      break;
  }
}

export default selectValueFilterFn