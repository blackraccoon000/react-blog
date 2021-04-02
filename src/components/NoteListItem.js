import React from "react"
import { Link } from "react-router-dom"
// import moment from "moment"
// import numeral from "numeral"

const NoteListItem = ({id,title,note,createdAt}) => {
  return (
      <div>
        <h3>{title}</h3>
        <p>{note}</p>
        <p>{id} : {createdAt}</p>
      </div>
)}

export default　NoteListItem