import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./ProjectDetails.css";
import React, { Fragment, useContext, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import v_chrome_extension from "../../videos/Color Picker - Chrome Extension.mp4";
import { ProjectsListContext } from "../../Context/ProjectListContext";
import { useTranslation } from "react-i18next";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";

function ProjectDetails() {
  useScrollReveal(".pd-left", { origin: "left" });
  useScrollReveal(".pd-right", { origin: "right" });
  useScrollReveal(".pd-link", { origin: "bottom" });
  useScrollReveal(".pd-proj-info-title-left", { origin: "left" });
  useScrollReveal(".pd-proj-info-right", { origin: "right" });
  useScrollReveal(".pd-footer", { origin: "bottom" });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const { ProjectsList } = t("project-list");
  const navigate = useNavigate();
  const { id } = useParams();
  const project = useContext(ProjectsListContext);
  const tech = ProjectsList[id].technology;
  const videoAvailable = project[id].videoAvailable;
  const feature = ProjectsList[id].features;
  const thumbnail = project[id].img;
  const goback = () => {
    navigate(-1);
  };

  return (
    <div className="project-details">
      <div className="pd-back-btn">
        <button className="pd-b-btn" onClick={goback}>
          <i className="ri-arrow-left-line"></i>
          back
        </button>
      </div>
      <div className="project-container">
        <div className="proj-title">{ProjectsList[id].name}</div>
        <div className="pd-intro">
          <div className="pd-left">
            {ProjectsList[id].detail_decs}
            <div className="pd-proj-tech">
              <div className="pd-proj-tech-title">{t("tech-used-title")}</div>
              <ul>
                {tech.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pd-right">
            {videoAvailable && (
              <video
                src={v_chrome_extension}
                className="pd-video"
                autoPlay
                controls
                muted
              >
                {t("unsupport-vid-tag-warning")}
              </video>
            )}
            {!videoAvailable && (
              <img
                src={thumbnail}
                className="pd-image"
                alt="this is a image of project."
              />
            )}
          </div>
        </div>

        <div className="pd-link">
          {project[id].isGitLink && (
            <div className="sc-btn ">
              <a href={project[id].gitLink}>
                <button className="sc-button pd-btn-width">Github Repo</button>
              </a>
            </div>
          )}
          {project[id].isUrl && (
            <div className="sc-btn ">
              <a href={project[id].url}>
                <button className="sc-button pd-btn-width">
                  {t("visit-website")}
                </button>
              </a>
            </div>
          )}
        </div>

        {project[id].ImagesAvailable && (
          <Fragment>
            <div className="pd-img-name">{t("proj-images-title")}</div>
            <div className="pd-img-container">
              <ImageSlider img={project[id].Images} />
            </div>
          </Fragment>
        )}
        <div className="pd-proj-info">
          <div className="pd-proj-info-title-left">
            <p className="pd-proj-p1">{t("pd-proj-p1")}</p>
            <p className="pd-proj-p2">{t("pd-proj-p2")}</p>
            <p className="pd-proj-p3">{t("pd-proj-p3")}</p>
          </div>
          <div className="pd-proj-info-right">
            <ul>
              {feature.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pd-footer">{t("thank-you")}</div>
      </div>
    </div>
  );
}

export default ProjectDetails;
