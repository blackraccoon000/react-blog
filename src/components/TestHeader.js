import React from "react"

const TestHeader = () => {
  return (
    <div className="test-header">
      <div className="test-header__container">
        <div className="test-header__container--start">
          <p className="logo__main">LOGO</p>
          <div className="logo__sub">
            <p className="logo__group-name">会社名</p>
            <p className="logo__group-text">会社説明</p>
          </div>
          <span className="community-selector">▼</span>
        </div>
        <div className="test-header__container--end">
          <span className="material-icons">face</span>
          <p className="search">虫眼鏡</p>
          <p className="notification">ベル</p>
        </div>
      </div>
    </div>
  )
}

export default TestHeader