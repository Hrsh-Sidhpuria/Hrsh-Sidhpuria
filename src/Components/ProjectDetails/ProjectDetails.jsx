import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./ProjectDetails.css";
import React, { Fragment, useContext, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import v_chrome_extension from "../../videos/Color Picker - Chrome Extension.mp4";
import { ProjectsListContext } from "../../Context/ProjectListContext";

function ProjectDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { id } = useParams();
  const project = useContext(ProjectsListContext);
  const tech = project[id].technology;
  const videoAvailable = project[id].videoAvailable;
  const feature = project[id].features;
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
        <div className="proj-title">{project[id].name}</div>
        <div className="pd-intro">
          <div className="pd-left">
            {project[id].detail_decs}
            <div className="pd-proj-tech">
              <div className="pd-proj-tech-title">Technologies Used</div>
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
                Your browser does not support the video tag.
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
                  Visit Website
                </button>
              </a>
            </div>
          )}
        </div>

        {project[id].ImagesAvailable && (
          <Fragment>
            <div className="pd-img-name">Images</div>
            <div className="pd-img-container">
              <ImageSlider img={project[id].Images} />
            </div>
          </Fragment>
        )}
        <div className="pd-proj-info">
          <div className="pd-proj-info-title-left">
            <p className="pd-proj-p1">project</p>
            <p className="pd-proj-p2">Additional</p>
            <p className="pd-proj-p3">information</p>
          </div>
          <div className="pd-proj-info-right">
            <ul>
              {feature.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pd-footer">Thank You</div>
      </div>
    </div>
  );
}

export default ProjectDetails;
