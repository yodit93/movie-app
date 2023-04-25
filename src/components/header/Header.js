import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import './Header.scss';
const Header = () => {
  return (
    <div className="header">
      <Link>
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <BiUserCircle className="user"/>
      </div>
    </div>
  );
};

export default Header;