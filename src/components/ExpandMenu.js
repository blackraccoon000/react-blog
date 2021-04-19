import React from 'react';
import { Link } from 'react-router-dom';

class Translation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  onToggle = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    return (
      <div>
        <div id="cont">
          <div id="menu-fixed">
            <div class="notes">
              <p>Expand the menu!</p>
            </div>
            <a href="#cont">
              <i class="material-icons back">&#xE314;</i>
            </a>
            <a href="#menu-fixed">
              <div class="logo">
                <span></span>
                <p>TITLE</p>
              </div>
              <p class="pmenu">MENU</p>
            </a>
            <ul class="menu">
              <li>
                <i class="material-icons">&#xE88A;</i>
                <p>Home</p>
              </li>
              <li>
                <i class="material-icons">&#xE87A;</i>
                <p>Explore</p>
              </li>
              <li>
                <i class="material-icons">&#xE8CC;</i>
                <p>Shop</p>
              </li>
              <li>
                <i class="material-icons">&#xE8B8;</i>
                <p>Settings</p>
              </li>
              <li>
                <i class="material-icons">&#xE8B6;</i>
                <p>Search</p>
              </li>
            </ul>
            <i class="material-icons info">&#xE88E;</i>
          </div>
        </div>
        <div id="page">
          <div></div>
        </div>
      </div>
    );
  }
}

export default Translation;
