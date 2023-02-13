import me from "../Images/me.jpg";
import wave from "../Images/hiwave.JPG";
import {
  FaCoffee,
  FaMapMarked,
  FaCode,
  FaMailBulk,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaGithubSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const Homes = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 1 },
      }}
    >
      <div>
        <main>
          <div className="img-div">
            <img className="profile" src={me} alt="profile" />
          </div>
          <div className="info">
            <h1>
              Hi , I'm
              <span id="profile-name"> Vincent</span>
              <span>
                <img className="wave" src={wave} />
              </span>
            </h1>
            <h3>I'm a Survey Programmer.</h3>
            <ul>
              <li>
                <span>
                  <FaCoffee id="info-icons" size="25px" />
                </span>
                <span id="info-text">Fueled by coffee</span>
              </li>
              <li>
                <span>
                  <FaMapMarked id="info-icons" size="25px" />
                </span>
                <span id="info-text">Base in the Philippines</span>
              </li>
              <li>
                <span>
                  <FaCode id="info-icons" size="25px" />
                </span>
                <span id="info-text">Survey Programmer at Dynata</span>
              </li>
              <li>
                <span>
                  <FaMailBulk id="info-icons" size="25px" />
                </span>
                <span id="info-text">baquirovincent@gmail.com</span>
              </li>
            </ul>
            <div className="media-ref">
              <ul>
                <li>
                  <a target="_blank" href="https://www.facebook.com/vinsoyss">
                    <FaFacebookF size="35px" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/benchuyest/"
                    target="_blank"
                  >
                    <FaInstagramSquare size="35px" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vincent-baquiro-20631420a/"
                    target="_blank"
                  >
                    <FaLinkedinIn size="35px" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" target="_blank">
                    <FaGithubSquare size="35px" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};
