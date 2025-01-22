import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage.js";
import main from "../assets/images/main.svg";
import { Logo } from "../component";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Simplify your job application process with Jobify — track, manage,
            and visualize your career opportunities effortlessly
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
