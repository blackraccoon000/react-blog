import React from "react"
import { connect } from "react-redux"
import { createBlog, removeBlog, editBlog } from "../actions/blogActions"

class CreateNote extends React.Component {
  constructor(props){
    super(props)
    const id = props.match.params.id && props.match.params.id
    const title = props.findData.title && props.findData.title
    const note = props.findData.note && props.findData.note
    this.state = {
      id,
      title,
      note,
      error:""
    }
    this.remove = this.remove.bind(this)
  }
  titleInput = (e) => {
    const title = e.target.value
    this.setState(()=>({ title }))
  }
  noteInput = (e) => {
    const note = e.target.value
    this.setState(()=>({ note }))
  }
  submit = (e) => {
    e.preventDefault()
    const { id, title, note } = this.state
    if( title==="" || note==="" ) {
      this.setState(()=>({ error: "titleとnoteに入力してください" }))
    } else {
      if(id) { this.props.editBlogD(id, { title, note }) }
      else { this.props.createBlogD({ title, note }) }
      this.props.history.push("/dashboard")
    }
  }
  remove = () => {
    this.props.removeBlogD(this.state.id)
  }
  render() {
    return (
    <div className="content-container">
      <h1>This is Create Note Page</h1>
      {this.state.error && <p className="form__error">{this.state.error}</p>}
        <div>
          <form onSubmit={this.submit}>
          <input type="text"
            className="createNote-title"
            type="text"
            autoFocus
            placeholder="title"
            onChange={this.titleInput}
            value={this.state.title}
            data-testid={"title"}
          />
          <textarea
            className="createNote-textarea"
            placeholder="Add a note"
            onChange={this.noteInput}
            value={this.state.note}
            data-testid={"note"}
          ></textarea>
          <button>save</button>
          {this.state.id && <button onClick={this.remove}>remove</button>}
        </form>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  const findData = state.blogData.find(note => note.id === ownProps.match.params.id)
  console.log(findData)
  return {
    findData: findData ? findData : {
      title:"",
      note:""
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBlogD: (createData) => dispatch(createBlog(createData)),
  editBlogD: (id,updates) => dispatch(editBlog(id,updates)),
  removeBlogD: (id) => dispatch(removeBlog(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote)
export { CreateNote }