import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import ArticleNote from "./ArticleNote"

class NoteListItem extends React.Component {
  constructor(props){
    super(props)
    const url = "https://dog.ceo/api/breeds/image/random"
    let img
    this.state = {
      id:props.id,
      title:props.title,
      note:props.note,
      createdAt:props.createdAt,
      img
    }
    const self = this
    axios.get(url)
    .then(res => {
      img = res.data.message
      self.setState({img})
    })
    .catch(error=>console.log(error))
  }
  render() {
    console.log(this.state)
    return (
      // <div>
      //   { this.props.isAuthenticated
      //   ?
      //   <Link className="note-list-item" to={`/edit/${this.state.id}`}>
      //     <ArticleNote
      //       img={this.state.img}
      //       title={this.state.title}
      //       note={this.state.note}
      //       createdAt={this.state.createdAt}
      //     />
      //   </Link>
      //   :
      //     <ArticleNote
      //       img={this.state.img}
      //       title={this.state.title}
      //       note={this.state.note}
      //       createdAt={this.state.createdAt}
      //     />
      //   }
      // </div>
      <div>
        <Link className="note-list-item" to={`/edit/${this.state.id}`}>
          <ArticleNote
            img={this.state.img}
            title={this.state.title}
            note={this.state.note}
            createdAt={this.state.createdAt}
          />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})

export default connect( mapStateToProps )(NoteListItem)
export { NoteListItem }