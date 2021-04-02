import selectValueFilterFn from "../../selectors/selectValueFilterFn"

let sortByDate, sortByText, sortOrderAscending, sortOrderDescending,
  dispatch, e

beforeEach(()=>{
  sortByDate = jest.fn()
  sortByText = jest.fn()
  sortOrderAscending = jest.fn()
  sortOrderDescending = jest.fn()
  dispatch = jest.fn()
})

it("value:date", () => {
  e = {target:{value:"date"}}
  selectValueFilterFn(e, dispatch)
  expect(dispatch).toHaveBeenCalledWith({"type": "SORT_BY_DATE"})
})
it("value:text", () => {
  e = {target:{value:"text"}}
  selectValueFilterFn(e, dispatch)
  expect(dispatch).toHaveBeenCalledWith({"type": "SORT_BY_TEXT"})
})
it("value:ascending", () => {
  e = {target:{value:"ascending"}}
  selectValueFilterFn(e, dispatch)
  expect(dispatch).toHaveBeenCalledWith({"type": "SORT_ORDER_ASCENDING"})
})
it("value:descending", () => {
  e = {target:{value:"descending"}}
  selectValueFilterFn(e, dispatch)
  expect(dispatch).toHaveBeenCalledWith({"type": "SORT_ORDER_DESCENDING"})
})