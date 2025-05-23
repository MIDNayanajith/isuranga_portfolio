import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/MIDNayanajith"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/isuranga-nayanajith"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.facebook.com/share/1BvjMkPE1d/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-facebook-f"></i>
      </a>
    </div>
  );
};

export default Social;
