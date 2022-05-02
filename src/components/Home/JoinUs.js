import React from "react";

import "./css/JoinUs.css";

const JoinUs = () => {
  return (
    <div className="JoinUs__container">
      <h3 className="title">Join us on the bright side</h3>
      <p>
        Join us and You'll be the first to know about the latest styles and
        promotions
      </p>
      <input type="text" placeholder="Email Address" />
      <button>Subscribe</button>
    </div>
  );
};

export default JoinUs;
