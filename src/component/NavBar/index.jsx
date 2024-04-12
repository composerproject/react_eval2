import { NavLink } from "react-router-dom";

const checkIsActive = ({ isActive }) => {
  return isActive
    ? {
        color: "#898fff",
      }
    : {};
};
const NavBar = () => {
  return (
    <nav>
      <NavLink style={checkIsActive} to={"/"}>
        ACCUEIL
      </NavLink>
      <NavLink style={checkIsActive} to={"/add-post"}>
        AJOUTER UN POST
      </NavLink>
    </nav>
  );
};

export default NavBar;
