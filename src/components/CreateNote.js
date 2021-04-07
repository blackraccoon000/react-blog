import React from "react"
import { connect } from "react-redux"
import { DateTime } from "luxon";
import { createBlog, removeBlog, editBlog, firebaseAddBlog } from "../actions/blogActions"
import { Image } from "./Image"
import database from "../firebase/firebase"
import axios from "axios"


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
      error:"",
      link:undefined,
      images:[]
    }
    const arr = [...Array(10)].map((_, i) => i);
    const url = "https://dog.ceo/api/breeds/image/random"
    arr.map(_ => axios.get(url)
      .then(res => {
        const ary = this.state.images
        this.setState(() => {
          images:ary.push(res.data.message)
        })
      })
      .catch(error=>console.log(error))
    )
    axios.get(url)
      .then(res => {
        // const ary = this.state.images
        // this.setState(() => {
        //   images:ary.push(res.data.message)
        // })
        console.log(res)
      })
      .catch(error=>console.log(error))
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
      if(id) {
        this.props.editBlogD(id, { title, note })
        this.firebaseEdit(e)
      } else {
        this.props.createBlogD({ title, note })
        this.firebaseAdd(e)
      }
      this.props.history.push("/")
    }
  }
  remove = (e) => {
    this.props.removeBlogD(this.state.id)
    this.firebaseRemove(e)
    this.props.history.push("/")
  }
  firebaseAdd = (e) => {
    e.preventDefault()
    const uid = process.env.FIREBASE_LOGIN_UID
    database.ref(`users/${uid}/`).push({
      title: this.state.title,
      note: this.state.note,
      createdAt: DateTime.now().ts
    }).then(_ => console.log("success"))
    .catch(error => console.log(error))
  }
  firebaseEdit = (e) => {
    e.preventDefault()
    const uid = process.env.FIREBASE_LOGIN_UID
    const id = this.state.id
    const updates = {
      title:this.state.title,
      note: this.state.note,
      updatedAt: DateTime.now().ts
    }
    database.ref(`users/${uid}/${id}`).update(updates)
    .then(()=>{
      console.log("success")
    })
    .catch(error => console.log(error))
  }
  firebaseRemove = (e) => {
    e.preventDefault()
    const uid = process.env.FIREBASE_LOGIN_UID
    const id = this.state.id
    database.ref(`users/${uid}/${id}`).remove()
    .then(()=>{
      console.log("success")
    })
  }
  selectImage = (e) => {
    e.preventDefault()
    const link = e.target.src
    this.setState(() => ({ link }))
  }
  render() {
    return (
    <div className="content-container">
      {this.state.error && <p className="form__error">{this.state.error}</p>}
      <div>
        <form onSubmit={this.submit}>
          <label
            htmlFor="title"
            className="label-title"
          >Title</label>
          <input type="text"
            className="edit-title"
            type="text"
            autoFocus
            placeholder="Titleを入力してください"
            onChange={this.titleInput}
            value={this.state.title}
            data-testid={"title"}
          />
          <label
            htmlFor="body"
            className="label-body"
          >Body</label>
          <textarea
            className="edit-body"
            placeholder="Note本文を入力してください"
            onChange={this.noteInput}
            value={this.state.note}
            data-testid={"note"}
          ></textarea>
          <button className="save-btn"
            disabled={!!!this.props.uid}
          >save</button>
          {this.state.id && <button className="remove-btn" onClick={this.remove}
            disabled={!!!this.props.uid}
          >remove</button>}
          {/* <button onClick={this.firebaseAdd} disabled={!!!this.props.uid}>firebase Add</button>
          <button onClick={this.firebaseEdit} disabled={!!!this.props.uid}>firebase Edit</button>
          <button onClick={this.firebaseRemove} disabled={!!!this.props.uid}>firebase Remove</button> */}
        </form>
        {/* { this.state.images.map((v,i)=>{
          // console.log(v)
          return <img key={v} src={this.state.images[i]} className="sampleImg" onClick={this.selectImage}/>
        })} */}
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  const findData = state.blogData.find(note => note.id === ownProps.match.params.id)
  return {
    findData: findData ? findData : {
      title:"",
      note:""
    },
    uid: state.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBlogD: (createData) => dispatch(createBlog(createData)),
  editBlogD: (id,updates) => dispatch(editBlog(id,updates)),
  removeBlogD: (id) => dispatch(removeBlog(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote)
export { CreateNote }