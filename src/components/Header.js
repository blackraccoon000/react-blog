import React from "react"
import { connect } from "react-redux"
import { Link }  from "react-router-dom"
import NavMenu from "./NavMenu"
import { updateMessage } from "../actions/authActions"
import NoteListFilters from "./NoteListFilters"
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag:false,
    }
  }
  onClickBtn = () => {
    this.setState({flag: !this.state.flag })
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="content-container">
            <div className="header__div">
              <h1 className="header__title">
                <Link className="header__logo" to="/">My Blog</Link>
              </h1>
              { this.state.flag && <NavMenu history={history}/> }
              { this.state.flag && <NoteListFilters/> }
              <button className="navBtn" data-testid="navBarFlagButton" onClick={this.onClickBtn}>
                {this.state.flag ? "Close" : "Open" }
              </button>
            </div>
          </div>
        </header>
        <div className="header-alert">
          <div className="content-container">
            { this.props.message && (
              <div className="alert-message__area">
                <p className="alert-message">{this.props.message}</p>
                <button
                  className="alert-btn"
                  onClick={()=>this.props.updateMessageD("")}
                >x</button>
              </div>
            ) }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  message: state.auth.message
})

const mapDispatchToProps = (dispatch) => ({
  updateMessageD:(str) => dispatch(updateMessage(str))
})

export { Header }
export default connect( mapStateToProps, mapDispatchToProps )( Header )