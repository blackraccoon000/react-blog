import React from "react"
import { Link } from "react-router-dom"
// import moment from "moment"
// import numeral from "numeral"

const NoteListItem = ({id,title,note,createdAt}) => {
  return (
      <div>
        <Link className="note-list-item" to={`/edit/${id}`}>
          <h3>{title}</h3>
          <p>{note}</p>
          <p>{createdAt}</p>
        </Link>
      </div>
)}

export default　NoteListItem