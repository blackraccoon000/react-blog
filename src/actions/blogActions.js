import {v4 as uuidv4} from "uuid"
import { DateTime } from "luxon";

const createBlog = (createData) => {
  const { title, note, createdAt=DateTime.now().ts } = createData
  return {
    type:"CREATE_BLOG",
    blog: {
      id: uuidv4(),
      title,
      note,
      createdAt
    }
  }
}

const removeBlog = (id) => {
  return {
    type:"REMOVE_BLOG",
    id
  }
}

const editBlog = (id,updates) => {
  const { title="", note="" } = updates
  return {
    type:"EDIT_BLOG",
    id,
    updates: {
      title,
      note,
      updatedAt:DateTime.now().ts
    }
  }
}

export { createBlog, removeBlog, editBlog }