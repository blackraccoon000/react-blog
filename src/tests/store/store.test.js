import store from "../../store/store"
import { setText } from "../../actions/filterActions"
import { createBlog } from "../../actions/blogActions"
import { createDataOne } from "../fixtures/createData"

it("store getState in blogData", () => {
  expect(store.getState().blogData).toStrictEqual([])
})

it("store getState in filters", () => {
  expect(store.getState().filters).toStrictEqual({
    text: '',
    sortBy: 'date',
    sortOrder: 'ascending',
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ''
  })
})

it("create blogData => createDataOne", () => {
  store.dispatch(createBlog(createDataOne))
  expect(store.getState().blogData).toStrictEqual([{
    "createdAt": 1000,
    "id": "8f305df0-62b9-4768-9184-dcee36d71782", //use Mock
    "note": "1 create blog now one",
    "title": "first blog",
  }])
})

it("create filter => sortByDate", () => {
  store.dispatch(setText("one"))
  expect(store.getState().filters).toStrictEqual({
    text: 'one',
    sortBy: 'date',
    sortOrder: 'ascending',
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ''
  })
})