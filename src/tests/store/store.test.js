import store from "../../store/store"
import { v4 as uuidv4 } from "uuid" // Use mock
import { setText } from "../../actions/filterActions"
import { createBlog } from "../../actions/blogActions"
import { createDataOne } from "../fixtures/createData"

it("store getState in blogData", () => {
  expect(store.getState().blogData).toStrictEqual([])
})

it("store getState in temp", () => {
  expect(store.getState().temp).toStrictEqual({"note": "", "title": ""})
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
    "id": "some-short-v4-uuid-00", //use Mock
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