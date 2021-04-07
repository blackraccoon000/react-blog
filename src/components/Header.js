import React from "react"
import NavMenu from "./NavMenu"
import { connect } from "react-redux"
import NoteListFilters from "./NoteListFilters"
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag:false
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
            <h1 className="header__title">My Blog</h1>
            { this.state.flag && <NavMenu history={history}/> }
            { this.state.flag && <NoteListFilters/> }
            <button className="navBtn" data-testid="navBarFlagButton" onClick={this.onClickBtn}>
              {this.state.flag ? "Close" : "Open" }
            </button>
          </div>
        </header>
        <div className="header-alert">
          <div className="content-container">
            { this.props.isAuthenticated && "sign in now" }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})

export { Header }
export default connect( mapStateToProps )( Header )