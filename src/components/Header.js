import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import { updateMessage } from '../actions/authActions';
import NoteListFilters from './NoteListFilters';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  onClickBtn = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    const { isOpen, setOpen } = false;
    return (
      <div>
        <header className="site-header">
          <div className="site-header__container">
            <div className="site-header__container--start">
              <div className="site-header__title">
                <h1 className="site-header__title--logo" rel="home">
                  <a className="site-header__title--link" href="#">
                    ロゴ
                  </a>
                </h1>
              </div>
            </div>
            <div className="site-header__container--end">
              <div className="site-header__sp-nav">
                <Hamburger
                  // https://hamburger-react.netlify.app/
                  size={32}
                  color="#282828"
                  distance="sm"
                  label="Show menu"
                  toggled={isOpen}
                  toggle={setOpen}
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
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   isAuthenticated: !!state.auth.uid,
//   message: state.auth.message
// })

// const mapDispatchToProps = (dispatch) => ({
//   updateMessageD:(str) => dispatch(updateMessage(str))
// })

// export { Header }
// export default connect( mapStateToProps, mapDispatchToProps )( Header )

export default Header;
