import {v4 as uuidv4} from "uuid"
import { DateTime } from "luxon";

// const now = DateTime.now();
// console.log("now",now)
// console.log("now",now.toString(),now.locale)
// console.log(DateTime.fromMillis(1542674993410).toString())
// console.log(DateTime.fromMillis(1617005795889).toString())

// Blog Actions

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

// Filter Actions

const setText = (text = 0) => {
  return {
    type:"SET_TEXT",
    text
  }
}

const sorByDate = () => {
  return {
    type:"SORT_BY_DATE"
  }
}

const sorByText = () => {
  return {
    type:"SORT_BY_TEXT"
  }
}

const sortOrderAscending = () => {
  return {
    type:"SORT_ORDER_ASCENDING"
  }
}

const sortOrderDescending = () => {
  return {
    type:"SORT_ORDER_DESCENDING"
  }
}

const setStartDate = (startDate) => {
  return {
    type:"SET_START_DATE",
    startDate
  }
}

const setEndDate = (endDate) => {
  return {
    type:"SET_END_DATE",
    endDate
  }
}

const setSqueezeNum = (squeezeNum) => {
  return {
    type:"OUTPUT_ARRAY",
    squeezeNum
  }
}

export { createBlog, removeBlog, editBlog,
  setText, sorByDate, sorByText, setStartDate, setEndDate,
  setSqueezeNum, sortOrderAscending, sortOrderDescending }