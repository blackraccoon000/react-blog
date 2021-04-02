import filtersReducer from "../../reducers/filtersReducer"

let action, state

const changeDateAscState = {
  text: "",
  sortBy: "date", // text or date
  sortOrder: "ascending", // ascending , descending
  startDate: undefined,
  endDate: undefined,
  squeezeNum: ""
}

const changeTextState = {
  text: "",
  sortBy: "text", // text or date
  sortOrder: "ascending", // ascending , descending
  startDate: undefined,
  endDate: undefined,
  squeezeNum: ""
}

const changeDateDesState = {
  text: "",
  sortBy: "date", // text or date
  sortOrder: "descending", // ascending , descending
  startDate: undefined,
  endDate: undefined,
  squeezeNum: ""
}

it("setup filter",()=>{
  state = filtersReducer(undefined, { type:"@@INIT" })
  expect(state).toEqual({
    text: "",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ""
  })
})

it("set text",()=>{
  action = {
    type:"SET_TEXT",
    text:"aaaa"
  }
  state = filtersReducer(changeDateAscState, action)
  expect(state).toEqual({
    text: "aaaa",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ""
  })
})

it("sort by text",()=>{
  action = {
    type:"SORT_BY_TEXT",
  }
  state = filtersReducer(changeDateAscState, action)
  expect(state).toEqual({
    text: "",
    sortBy: "text", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ""
  })
})

it("sort by date",()=>{
  action = {
    type:"SORT_BY_DATE",
  }
  state = filtersReducer(changeTextState, action)
  expect(state).toEqual({
    text: "",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ""
  })
})

it("sort order ascending",()=>{
  action = {
    type:"SORT_ORDER_ASCENDING",
  }
  state = filtersReducer(changeDateDesState, action)
  expect(state).toEqual({
    text: "",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ""
  })
})

it("sort order descending",()=>{
  action = {
    type:"SORT_ORDER_DESCENDING",
  }
  state = filtersReducer(changeDateAscState, action)
  expect(state).toEqual({
    text: "",
    sortBy: "date", // text or date
    sortOrder: "descending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ""
  })
})

it("set start date",()=>{
  action = {
    type:"SET_START_DATE",
    startDate: 10000
  }
  state = filtersReducer(changeDateAscState, action)
  expect(state).toEqual({
    text: "",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: 10000,
    endDate: undefined,
    squeezeNum: ""
  })
})

it("set end date",()=>{
  action = {
    type:"SET_END_DATE",
    endDate: 10000
  }
  state = filtersReducer(changeDateAscState, action)
  expect(state).toEqual({
    text: "",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: 10000,
    squeezeNum: ""
  })
})

it("output array",()=>{
  action = {
    type:"OUTPUT_ARRAY",
    squeezeNum: 10
  }
  state = filtersReducer(changeDateAscState, action)
  expect(state).toEqual({
    text: "",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: 10
  })
})