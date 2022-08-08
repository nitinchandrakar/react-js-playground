import {  NavLink } from "react-router-dom";

export default function Navbar() {

    const navLinkStyles = ({isActive})=>{
        return {
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline'
        }
    }

  return (
    <nav>
      <NavLink to="/" style={navLinkStyles}>Home</NavLink>
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
      <NavLink to="/contextapi" style={navLinkStyles}>Context Api</NavLink>
      <NavLink to="/forwardref" style={navLinkStyles}>Forward Ref Demo</NavLink>
    </nav>
  );
}
