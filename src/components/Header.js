import React from "react"
import NavMenu from "./NavMenu"
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
      <header className="header">
        <div className="content-container">
          <h1 className="header__title">My Blog</h1>
          { this.state.flag && <NavMenu history={history}/> }
          <button onClick={this.onClickBtn}>open</button>
        </div>
      </header>
    )
  }
}

export default Header