import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./portfolio.css";
import Project1 from "../../assets/pro1.png";
import Project2 from "../../assets/pro2.png";
import Project3 from "../../assets/pro3.png";
import Project4 from "../../assets/pro4.png";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleTab = (index, project) => {
    setToggleState(index);
    setSelectedProject(project);
  };

  const portfolioData = [
    {
      id: 1,
      title: "School Management System",
      image: Project1,
      description:
        "A comprehensive web application to manage students, teachers, and parents with database features like triggers, views, functions, and procedures.",
      technologies: ["Laravel", "Bootstrap", "CSS", "MySQL"],
      github: "https://github.com/NilmiSenevirathne/School-Management-System",
    },
    {
      id: 2,
      title: "Business Management System",
      image: Project2,
      description:
        "An inventory, employee, and finance management system for businesses, with a modern UI and RESTful API backend.",
      technologies: ["React", "Laravel", "Bootstrap", "REST API", "MySQL"],
      github: "https://github.com/MIDNayanajith/wasthra_ba",
    },
    {
      id: 3,
      title: "POS System(Business Mangement System)",
      image: Project3,
      description:
        "A point-of-sale system with inventory and billing features, designed for small to medium businesses.",
      technologies: ["React", "Bootstrap", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/MIDNayanajith/Electronic_Backend",
    },
    {
      id: 4,
      title: "Real Estate Web Application",
      image: Project4,
      description:
        "A MERN stack application for real estate listings, user accounts, and property management.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/MIDNayanajith/Real_Estate-FullStack",
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent works</span>

      <div className="portfolio__container container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {portfolioData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="portfolio__content">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio__img"
                />
                <h3 className="portfolio__title">{project.title}</h3>
                <span
                  className="portfolio__button"
                  onClick={() => toggleTab(1, project)}
                >
                  View More{" "}
                  <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={
            toggleState === 1
              ? "portfolio__modal active-modal"
              : "portfolio__modal"
          }
        >
          {selectedProject && (
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0, null)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">
                {selectedProject.title}
              </h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="portfolio__modal-img"
              />

              <p className="portfolio__modal-description">
                {selectedProject.description}
              </p>

              <div className="portfolio__modal-tech">
                <h4>Technologies:</h4>
                <ul className="portfolio__modal-list grid">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index} className="portfolio__modal-item">
                      <i className="uil uil-check-circle portfolio__modal-icon"></i>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="portfolio__modal-link button--flex"
              >
                GitHub Repository
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
