import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              setToggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              setToggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Certifications
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Information and Communication Technology (Honors)
                </h3>
                <span className="qualification__subtitle">
                  University of Ruhuna
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2020 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 2 part */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Postman API Fundamentals Student Expert
                </h3>
                <span className="qualification__subtitle">Postman</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2025</i>
                </div>
              </div>
            </div>

            {/* ================= */}

            {/* 2 part */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Project Management Foundations
                </h3>
                <span className="qualification__subtitle">
                  LinkedIn Learning
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2025</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Networking Essentials</h3>
                <span className="qualification__subtitle">
                  Cisco Networking Academy (Offered by Innovate IT Institute)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2025</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Introduction to GitHub</h3>
                <span className="qualification__subtitle">
                  Microsoft Learn{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2025</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
