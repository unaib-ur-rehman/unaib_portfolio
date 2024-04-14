import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [selectedCategory, setSelectedCategory] = useState(
    bigProjects.categories.findIndex(
      category => category.name === "UI/UX Design"
    )
  );
  const {isDark} = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="categories">
            {bigProjects.categories.map((category, index) => (
              <button
                key={index}
                className={
                  selectedCategory === index
                    ? "selected-category category-button"
                    : "category-button"
                }
                onClick={() => setSelectedCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="projects-container">
            {selectedCategory !== null &&
              bigProjects.categories[selectedCategory].projects.map(
                (project, i) => (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image && (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="project-card-image"
                        ></img>
                      </div>
                    )}
                    <div className="project-detail">
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                      {project.footerLink && (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
