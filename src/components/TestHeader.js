import React from 'react';
import Translation from './Translation';

const TestHeader = () => {
  return (
    <div className="test-header">
      <div className="test-header__container">
        <div className="test-header__container--start">
          <p className="logo__main">LOGO</p>
          {/* <div className="logo__sub">
            <p className="logo__group-name">会社名</p>
            <p className="logo__group-text">会社説明</p>
          </div> */}
          <span className="community-selector">▼</span>
        </div>
        <div className="test-header__container--end">
          {/* <a className="face" href=""></a> */}
          <div>
            <span className="material-icons">face</span>
          </div>
          <span className="material-icons search">search</span>
          <span className="material-icons notification">notifications</span>
        </div>
      </div>
    </div>
  );
};

export default TestHeader;
