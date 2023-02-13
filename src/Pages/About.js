import {
  FaCircle,
  FaBook,
  FaMusic,
  FaMicrophoneAlt,
  FaWater,
} from "react-icons/fa";

import { motion } from "framer-motion";

export const Abouts = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className="about-me">
        <section className="sec-1">
          <div className="fa-circle">
            <ul>
              <li>
                <FaCircle color="red" />
              </li>
              <li>
                <FaCircle color="orange" />
              </li>
              <li>
                <FaCircle color="green" />
              </li>
            </ul>
          </div>
          <div className="sec-1-child">
            <p>
              <span className="span-green">vincentbaquiro $ </span> cd
              aboutvincent
            </p>
            <p>
              <span className="span-green">aboutvincent</span>
              <span className="span-rgb-green">(main)</span>
              <span className="span-green"> $</span> Hello! I'm vincent. I'm a
              Survey Programmer from Dynata, with a year of experience. I enjoy
              long walks on the beach, and I believe artificial intelligence
              will inevitably rule us all one day. You should hire me!
            </p>
          </div>
        </section>
        <section className="sec-1">
          <div className="fa-circle">
            <ul>
              <li>
                <FaCircle color="red" />
              </li>
              <li>
                <FaCircle color="orange" />
              </li>
              <li>
                <FaCircle color="green" />
              </li>
            </ul>
          </div>
          <div className="sec-1-child">
            <p>
              <span className="span-green">vincentbaquiro $</span> cd
              skills/tools
            </p>
            <p>
              <span className="span-green">skills/tools </span>
              <span className="span-rgb-green">(main)</span>
              <span className="span-green"> $</span> ls
            </p>
            <p>
              <span className="span-green">Proficient With</span>
            </p>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap(Intermediate)</li>
            </ul>
            <p>
              <span className="span-green">Expose To</span>
            </p>
            <ul>
              <li>Python</li>
              <li>Decipher</li>
              <li>Jquery</li>
            </ul>
          </div>
        </section>
        <section className="sec-1">
          <div className="fa-circle">
            <ul>
              <li>
                <FaCircle color="red" />
              </li>
              <li>
                <FaCircle color="orange" />
              </li>
              <li>
                <FaCircle color="green" />
              </li>
            </ul>
          </div>
          <div className="sec-1-child">
            <p>
              <span className="span-green">vincentbaquiro $ </span>
              hobbies/interests
            </p>
            <p>
              <span className="span-green">hobbies/interests </span>
              <span className="span-rgb-green">(main)</span>
              <span className="span-green"> $</span> ls
            </p>
            <ul className="hobbies">
              <li>
                <span className="hobbies-icons">
                  <FaBook />
                </span>
                Studying
              </li>
              <li>
                <span className="hobbies-icons">
                  <FaMusic />
                </span>
                Playing Keyboard
              </li>
              <li>
                <span className="hobbies-icons">
                  <FaMicrophoneAlt />
                </span>
                Singing
              </li>
              <li>
                <span className="hobbies-icons">
                  <FaWater />
                </span>
                Beaching
              </li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
