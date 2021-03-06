import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import {
  createBlog,
  removeBlog,
  editBlog,
  firebaseAddBlog,
} from '../actions/blogActions';
import Image from './Image';
import database from '../firebase/firebase';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id && props.match.params.id;
    const title = props.findData.title && props.findData.title;
    const note = props.findData.note && props.findData.note;
    const link = props.findData.link && props.findData.link;
    this.state = {
      id,
      title,
      note,
      error: '',
      link,
      images: [],
      imgFlag: false,
    };
    // console.log(this.state)
  }
  titleInput = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  noteInput = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  linkInput = (e) => {
    const link = e.target.src;
    this.setState(() => ({ link }));
  };
  submit = (e) => {
    e.preventDefault();
    const { id, title, note, link } = this.state;
    if (title === '' || note === '') {
      this.setState(() => ({ error: 'titleとnoteに入力してください' }));
    } else {
      if (id) {
        this.props.editBlogD(id, { title, note, link });
        this.firebaseEdit(e);
      } else {
        // create
        this.firebaseAdd(e);
      }
      this.props.history.push('/');
    }
  };
  remove = (e) => {
    this.props.removeBlogD(this.state.id);
    this.firebaseRemove(e);
    this.props.history.push('/');
  };
  firebaseAdd = (e) => {
    e.preventDefault();
    const uid = process.env.FIREBASE_LOGIN_UID;
    database
      .ref(`users/${uid}/`)
      .push({
        title: this.state.title,
        note: this.state.note,
        link: this.state.link,
        createdAt: DateTime.now().ts,
      })
      .then((res) => {
        const { id = res.path.pieces_[2], title, note, link } = this.state;
        this.props.createBlogD({ id, title, note, link });
      })
      .catch((error) => console.log(error));
  };
  firebaseEdit = (e) => {
    e.preventDefault();
    const uid = process.env.FIREBASE_LOGIN_UID;
    const id = this.state.id;
    const updates = {
      title: this.state.title,
      note: this.state.note,
      link: this.state.link,
      updatedAt: DateTime.now().ts,
    };
    database
      .ref(`users/${uid}/${id}`)
      .update(updates)
      .then(() => {
        console.log('success');
      })
      .catch((error) => console.log(error));
  };
  firebaseRemove = (e) => {
    e.preventDefault();
    const uid = process.env.FIREBASE_LOGIN_UID;
    const id = this.state.id;
    database
      .ref(`users/${uid}/${id}`)
      .remove()
      .then(() => {
        console.log('success');
      });
  };
  render() {
    return (
      <div className="article-editor__container">
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <form className="article-editor__form">
          {this.state.link ? (
            <img src={this.state.link} alt="" className="article-editor__img" />
          ) : (
            <div className="article-editor__img--no-sample">
              <p>No Image</p>
            </div>
          )}
          <label htmlFor="title" className="article-editor__label">
            Title
          </label>
          <input
            type="text"
            className="article-editor__input"
            type="text"
            autoFocus
            placeholder="Titleを入力してください"
            onChange={this.titleInput}
            value={this.state.title}
            data-testid={'title'}
          />
          <label htmlFor="body" className="article-editor__label">
            Body
          </label>
          <textarea
            className="article-editor__input"
            placeholder="Note本文を入力してください"
            onChange={this.noteInput}
            value={this.state.note}
            data-testid={'note'}
          ></textarea>
        </form>
        <div className="article-editor__container--button">
          <button
            className="article-editor__button--save"
            onClick={this.submit}
          >
            save
          </button>
          {this.state.id && (
            <button
              className="article-editor__button--remove"
              onClick={this.remove}
            >
              remove
            </button>
          )}
          <button
            className="article-editor__button--img"
            onClick={() => {
              this.setState({ imgFlag: !this.state.imgFlag });
            }}
          >
            image
          </button>
        </div>
        {this.state.imgFlag && <Image linkInput={this.linkInput} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const findData = state.blogData.find(
    (note) => note.id === ownProps.match.params.id
  );
  // console.log("get findData:",findData)
  return {
    findData: findData
      ? findData
      : {
          title: '',
          note: '',
          link: '',
        },
    uid: state.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createBlogD: (createData) => dispatch(createBlog(createData)),
  editBlogD: (id, updates) => dispatch(editBlog(id, updates)),
  removeBlogD: (id) => dispatch(removeBlog(id)),
  messageFlagD: () => dispatch(messageFlag()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
export { CreateNote };
