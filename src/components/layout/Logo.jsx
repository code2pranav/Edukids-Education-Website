import { Link } from "react-router-dom";
import logo from "@assets/logo.png";

const Logo = ({ className = "" }) => (
  <Link to="/" className={className} aria-label="EduKids home">
    <img src={logo} alt="EduKids" className="w-full h-full object-contain" />
  </Link>
);

export default Logo;
