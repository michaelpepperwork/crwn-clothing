import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="hats"> HATS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="hats"> JACKETS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="hats"> SNEAKERS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="hats"> WOMENS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="hats"> MENS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
