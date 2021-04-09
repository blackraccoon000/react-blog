import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import ArticleNote from "./ArticleNote"
import getVisibleBlogData from "../selectors/getVisibleBlogData"

const Home = (props) => {
  return (
    <div className="content-container">
      {
        props.blogData.map(note => {
          return props.isAuthenticated ?
          <Link key={`link_${note.id}`} to={`/edit/${note.id}`}>
            <ArticleNote key={note.id} {...note} />
          </Link>
          :
          <ArticleNote key={note.id} {...note} />
        })
      }
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    blogData: getVisibleBlogData(state.blogData,state.filters),
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(Home)
export { Home }