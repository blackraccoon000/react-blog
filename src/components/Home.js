import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import ArticleNote from "./ArticleNote"
import getVisibleBlogData from "../selectors/getVisibleBlogData"

const Home = (props) => {
  return (
    <div>
      <div className="content-container">
        { props.isAuthenticated ?
          props.blogData.map(note => {
            return (
              <Link key={note.id} className="note-list-item" to={`/edit/${note.id}`}>
                <ArticleNote {...note} />
              </Link>
            )
          })
          :
          props.blogData.map(note => {
            return <ArticleNote key={note.id} {...note} />
          })
        }
      </div>
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