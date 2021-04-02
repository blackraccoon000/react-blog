import { v4 as uuidv4 } from "uuid" // Use mock
import { DateTime } from "luxon" // Use mock
import { createBlog, removeBlog, editBlog } from "../../actions/blogActions"

it("createBlog", () => {
  const testData = {
    title:"New Title",
    note:"New Note Data",
  }

  // Act
  const action = createBlog(testData)

  expect(action).toStrictEqual({
    "blog": {
      "createdAt": "1600000000000",
      "id": "some-short-v4-uuid-00",
      "note": "New Note Data",
      "title": "New Title"
    },
    "type": "CREATE_BLOG"
  })
})

it("removeBlog", () => {
  const id = "d4c9a72e-cc5d-413f-99f5-a048af23c9b5"
  const action = removeBlog(id)
  expect(action).toStrictEqual({
    type:"REMOVE_BLOG",
    id
  })
})

it("editBlog", () => {
  const id = "d4c9a72e-cc5d-413f-99f5-a048af23c9b5"
  const updates = {
    title:"Edit Title",
    note:"Edit Note"
  }
  const action = editBlog(id,updates)
  expect(action).toStrictEqual({
    type:"EDIT_BLOG",
    id,
    updates: {
      title:"Edit Title",
      note:"Edit Note",
      updatedAt:"1600000000000"
    }
  })
})
