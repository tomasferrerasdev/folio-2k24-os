import React from "react";
import { Resume } from "../Resume/Resume";
import styles from "./Projects.module.css";
import { projects } from "./projectData";

export const Projects = () => {
  return (
    <>
      <div className={styles.projects}>
        <div className={styles.projectsContent}>
          <div className={styles.projectsTitle}>
            <h1>Software</h1>
            <h3>Projects</h3>
          </div>
          <br />
          <p>
            Below are some of my favorite software projects I have worked on
            over the last few years.
          </p>
          <br />
          <Resume />
          {projects.map(
            ({
              id,
              title,
              description,
              image,
              figureCaption,
              codeUrl,
              liveUrl,
              tech,
              date,
            }) => (
              <React.Fragment key={id}>
                <div className="text-block">
                  <div className="text-block-title">
                    <h2>{title}</h2>
                    <p>{date}</p>
                  </div>
                  <br />
                  <p>{description}</p>
                </div>
                <br />
                <div className="captioned-image">
                  <img
                    src={`${image}`}
                    alt=""
                    style={{ border: "1px solid #000" }}
                  />
                  <p>
                    <sub>
                      <b>Figure 1:</b>
                      {figureCaption}
                    </sub>
                  </p>
                </div>
                <h2>Technologies</h2>
                <ul>
                  {tech?.map((technology) => {
                    return <li key={technology}>{technology}</li>;
                  })}
                </ul>

                <br />
                <h2>Links</h2>
                <h3>
                  <a href={`${codeUrl}`} target="_blank">
                    Github (code)
                  </a>
                </h3>
                <h3>
                  <a href={`${liveUrl}`} target="_blank">
                    Website (live)
                  </a>
                </h3>
                <br />
              </React.Fragment>
            )
          )}
          <br />
        </div>
      </div>
    </>
  );
};
