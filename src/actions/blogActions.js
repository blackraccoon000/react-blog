import {v4 as uuidv4} from "uuid"
import { DateTime } from "luxon";

const createBlog = (createData) => {
  // const { id=uuidv4(), title, note, createdAt=DateTime.now().ts, link="" } = createData
  const { id="",title, note, createdAt=DateTime.now().ts, link="" } = createData
  return {
    type:"CREATE_BLOG",
    blog: {
      id,
      title,
      note,
      link,
      createdAt
    }
  }
}

const editBlog = (id,updates) => {
  const { title="", note="", link="" } = updates
  return {
    type:"EDIT_BLOG",
    id,
    updates: {
      title,
      note,
      link,
      updatedAt:DateTime.now().ts
    }
  }
}

const removeBlog = (id) => {
  return {
    type:"REMOVE_BLOG",
    id
  }
}

const setBlog = (blogData) => {
  return {
    type:"SET_BLOG_DATA",
    blogData
  }
}


export { createBlog, editBlog, removeBlog, setBlog }