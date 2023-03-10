import "./NavBar.css";
import logo from "../../assets/NavBar/express-delivery.png";
import { Nav, Navbar } from "react-bootstrap";
import LoginButton from "../components/Login/LoginButton";
import RegisterButton from "../components/Register/RegisterButton";
import { Link } from "react-scroll";

function NavBar(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
        <img src={logo} className="logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="">
            <Link className="link" to="howToBuy" spy={true} smooth={true} offset={-60} duration={500} >How To Buy</Link>
            <Link className="link" to="packages" spy={true} smooth={true} offset={-70} duration={500} >Packages</Link>
            <Link className="link" to="stores" spy={true} smooth={true} offset={-80} duration={500} >Stores</Link>
            </div>
            <div className="">
            <LoginButton/>
            <RegisterButton/>
            </div>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;
