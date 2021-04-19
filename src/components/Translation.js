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
        <div className={this.state.flag ? 'translate move' : 'translate'}>
          <ul>
            <li>
              <Link to="/" hidden={!this.state.flag}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/translation" hidden={!this.state.flag}>
                translation
              </Link>
            </li>
          </ul>
        </div>
        <div className={this.state.flag ? 'flag-button move' : 'flag-button'}>
          <button onClick={this.onToggle}>Flag Button</button>
          <span
            className={this.state.flag ? 'cross-bar--modify' : 'cross-bar'}
          ></span>
        </div>
      </div>
    );
  }
}

export default Translation;
