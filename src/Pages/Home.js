import me from "../Images/me.jpg";
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
export const Home = () => {
  return (
    <div>
      <main>
        <div className="img-div">
          <img src={me} alt="profile" />
        </div>
        <div className="info">
          <h1>
            Hi , I'm{" "}
            <span id="profile-name" className="profile-moving">
              Vincent
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
                <FaFacebookF size="35px" />
              </li>
              <li>
                <FaInstagramSquare size="35px" />
              </li>
              <li>
                <FaLinkedinIn size="35px" />
              </li>
              <li>
                <FaGithubSquare size="35px" />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
