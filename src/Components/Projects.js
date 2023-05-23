import { FaCode, FaCompass } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { ProjectList } from "./ProjectList";

export const ProjectsDone = () => {
  return (
    <div>
      <div className="projects">
        {ProjectList.map((images, key) => {
          return (
            <div key={key}>
              <LazyLoad threshold={0.95}>
                <img src={images.imgLink} alt={images.alt} />
              </LazyLoad>
              <h2>{images.projectTitle}</h2>
              <button className="live-demo">
                <div className="link-wrap">
                  <FaCode size="30px" />
                  <a href={images.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </button>
              <div></div>
              <button className="source-code">
                <div className="link-wrap">
                  <FaCompass size="30px" />
                  <a href={images.sourceCode} target="_blank" rel="noreferrer">
                    Source code
                  </a>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
