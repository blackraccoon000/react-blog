import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { updateMessage } from '../actions/authActions';
import NoteListFilters from './NoteListFilters';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  setOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <header className="site-header">
          <div className="site-header__container">
            <div className="site-header__container--start">
              <div className="site-header__title">
                <h1 className="site-header__title--logo" rel="home">
                  <Link to="/" className="site-header__title--link">
                    ロゴ
                  </Link>
                </h1>
              </div>
            </div>
            <div className="site-header__container--end">
              <div className="site-header__sp-nav">
                <Hamburger
                  // https://hamburger-react.netlify.app/
                  size={22} // default 32
                  color="#282828"
                  distance="sm"
                  label="Show menu"
                  toggled={this.state.isOpen}
                  toggle={this.setOpen}
                />
                <label className="site-header__sp-nav--menu">MENU</label>
              </div>
              <div className="site-header__nav">
                <nav>
                  <ul className="site-header__nav--ul">
                    <li className="site-header__nav--li">
                      <a href="#">成功事例</a>
                    </li>
                    <li className="site-header__nav--li">
                      <a href="#">サービス紹介</a>
                    </li>
                    <li className="site-header__nav--li">
                      <a href="#">会社情報</a>
                    </li>
                    <li className="site-header__nav--li">
                      <a href="#">お問い合わせ</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {this.state.isOpen && (
          <div className="site-header__sp-nav--open">
            <div className="site-header__sp-nav--cross-button-div">
              <button
                className="site-header__sp-nav--button"
                onClick={this.setOpen}
              >
                Close Menu
              </button>
              <span className="site-header__cross-button">
                <span className="site-header__cross-button--b1-cross"></span>
                <span className="site-header__cross-button--b2-cross"></span>
              </span>
            </div>
            <ul>
              <li>
                <NavLink activeClassName="is-active" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="is-active" to="/create">
                  Create
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  message: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessageD: (str) => dispatch(updateMessage(str)),
});

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;
