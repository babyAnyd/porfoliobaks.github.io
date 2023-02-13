import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorTheme } from "../App";
import { HeaderUl } from "../HeaderList";
import ReactSwitch from "react-switch";

export const Header = () => {
  const { theme, changeTheme } = useContext(ColorTheme);

  return (
    <header>
      <nav>
        <ul>
          {HeaderUl.map((list, key) => {
            return (
              <li key={key}>
                <Link to={list.links} className={list.className}>
                  {list.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/">
              <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// <ul>
//   <li>
//     <Link className="border-bottom" to="/">
//       Home
//     </Link>
//   </li>
//   <li>
//     <Link className="border-bottom" to="/about">
//       About
//     </Link>
//   </li>
//   <li>
//     <Link className="js-center">Js</Link>
//   </li>
//   <li>
//     <Link className="border-bottom" to="/">
//       Portfolio
//     </Link>
//   </li>

// </ul>;
