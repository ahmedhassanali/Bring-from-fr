import "./NavBar.css";
import logo from "../../assets/NavBar/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import LoginButton from "../components/Login/LoginButton";
import RegisterButton from "../components/Register/RegisterButton";
import { Link } from "react-scroll";

function NavBar(props) {
  return (
    <>
      <Navbar bg="light" className="rounded-top navbar" sticky="top">
        
        <Navbar.Brand href="/" className="ms-5 d-none d-md-block">
          <img src={logo} className="logo" alt="" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <div className="nav-elements">
            <Link className="link" to="howToBuy" spy={true} smooth={true} offset={-60} duration={500} >How To Buy</Link>
            <Link className="link" to="packages" spy={true} smooth={true} offset={-70} duration={500} >Packages</Link>
            <Link className="link" to="stores" spy={true} smooth={true} offset={-80} duration={500} >Stores</Link>
            </div>

          </Nav>
        </Navbar.Collapse>

        <div className="me-5">
          <LoginButton/>
          <RegisterButton/>
        </div>

      </Navbar>
    </>
  );
}

export default NavBar;
