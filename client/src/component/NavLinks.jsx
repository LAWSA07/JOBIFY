import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import PropTypes from "prop-types";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, icon } = link;
          const { role } = user;
          if (role !== "admin" && path === "admin") return;
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSidebar}
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

NavLinks.propTypes = {
  isBigSidebar: PropTypes.bool,
};

export default NavLinks;
