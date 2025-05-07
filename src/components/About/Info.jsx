import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Frontend</h3>
        <span className="about__subtitle">Development</span>
      </div>

      <div className="about__box">
        <i className="bx bx-server about__icon"></i>
        <h3 className="about__title">Backend</h3>
        <span className="about__subtitle">Development</span>
      </div>

      <div className="about__box">
        <i className="bx bx-paint about__icon"></i>
        <h3 className="about__title">UI/UX</h3>
        <span className="about__subtitle">Design</span>
      </div>
    </div>
  );
};

export default Info;
