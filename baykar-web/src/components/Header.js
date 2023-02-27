/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <img
            src="https://i.ytimg.com/vi/ckUnSFRqBlo/maxresdefault.jpg"
            width="300"
            className="img-thumbnail"
            style={{ marginTop: "20px" }}
          />
          <hr />
          {/* <h1>Baykar İHA Rezervasyon App</h1> */}
        </div>
      </>
    );
  }
}

export default Header;
