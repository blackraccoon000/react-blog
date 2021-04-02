import { setText, sortByDate, sortByText, setStartDate, setEndDate,
  setSqueezeNum, sortOrderAscending, sortOrderDescending } from "../../actions/filterActions"

it("set text", () => {
  const action = setText("New Text")
  expect(action).toStrictEqual({
    type:"SET_TEXT",
    text:"New Text"
  })
})

it("sortByDate", () => {
  const action = sortByDate()
  expect(action).toStrictEqual({
    type:"SORT_BY_DATE"
  })
})

it("sortByText", () => {
  const action = sortByText()
  expect(action).toStrictEqual({
    type:"SORT_BY_TEXT"
  })
})

it("sortOrderAscending", () => {
  const action = sortOrderAscending()
  expect(action).toStrictEqual({
    type:"SORT_ORDER_ASCENDING"
  })
})

it("sortOrderDescending", () => {
  const action = sortOrderDescending()
  expect(action).toStrictEqual({
    type:"SORT_ORDER_DESCENDING"
  })
})

it("setStartDate", () => {
  const action = setStartDate(10000)
  expect(action).toStrictEqual({
    type:"SET_START_DATE",
    startDate:10000
  })
})
it("setEndDate", () => {
  const action = setEndDate(10000)
  expect(action).toStrictEqual({
    type:"SET_END_DATE",
    endDate:10000
  })
})

it("setSqueezeNum", () => {
  const action = setSqueezeNum(2)
  expect(action).toStrictEqual({
    type:"OUTPUT_ARRAY",
    squeezeNum:2
  })
})