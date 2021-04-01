import blogReducers from "../../reducers/blogReducer"
import blogNoteSample from "../fixtures/blogNoteSample"

it("first Action @INIT", () => {
  const action = { type: "@@INIT" }
  const state = blogReducers(blogNoteSample,action)
  expect(state).toEqual(blogNoteSample)
})

it("Action CREATE_BLOG", () => {
  const blog = {
    title:"New Title",
    note:"New Note Text",
    createdAt: 6000
  }
  const action = { type: "CREATE_BLOG" , blog}
  const state = blogReducers(blogNoteSample,action)
  expect(state).toEqual([...blogNoteSample,blog])
})

it("Action REMOVE_BLOG", () => {
  const id = "d4c9a72e-cc5d-413f-99f5-a048af23c9b5" // blogNoteSample[0]
  const action = { type: "REMOVE_BLOG" , id}
  const state = blogReducers(blogNoteSample,action)
  expect(state).toEqual([
    blogNoteSample[1],
    blogNoteSample[2],
    blogNoteSample[3],
    blogNoteSample[4],
  ])
})

it("Action EDIT_BLOG", () => {
  const id = "d4c9a72e-cc5d-413f-99f5-a048af23c9b5" // blogNoteSample[0]
  const updates = {
    title:"Edit Title",
    note:"Edit Note Text",
  }
  const action = { type: "EDIT_BLOG" , id, updates}
  const state = blogReducers(blogNoteSample,action)
  expect(state[0].title).toBe(updates.title)
  expect(state[0].note).toBe(updates.note)
})