import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import "./HomeMenu.css";

const HomeMenu = () => {
    return (
        <nav className="HomeMenu">
        <NavLink to="/" className="menu-item">
            <IoHomeOutline size={24} />
            <span>홈</span>
        </NavLink>
        <NavLink to="/mission" className="menu-item">
            <SlMagnifier size={24} />
            <span>미션</span>
        </NavLink>
        <NavLink to="/profile" className="menu-item">
            <IoPersonOutline size={24} />
            <span>프로필</span>
        </NavLink>
        </nav>
    );
    };

export default HomeMenu;
