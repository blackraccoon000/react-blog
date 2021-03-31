import React from "react"
import { connect } from "react-redux"

import NoteListItem from "./NoteListItem"
import getVisibleBlogData from "../selectors/getVisibleBlogData"

const NoteList = props => {
  return (<div>
    <h2>Note List</h2>
    {props.blogData.map(note => {
      return <NoteListItem key={note.id} {...note}/>
    })}
  </div>)
}

const mapStateToProps = (state)=>{
  return {
    blogData: getVisibleBlogData(state.blogData,state.filters)
  }
}

export default connect(mapStateToProps)(NoteList)
export { NoteList }