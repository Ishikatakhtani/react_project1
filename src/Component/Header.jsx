import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { PiLineVertical } from "react-icons/pi";
import { PiUserCircleBold } from "react-icons/pi";
const Header=()=>{
    return(
        <>
        <div id='header1' style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h4>WIX <PiLineVertical  size={28}/></h4> 
             <p style={{paddingTop:"0.5%", paddingRight:"0.5%"}} >This website is build on VIX create yours Today.</p> 
             <button style={{borderRadius:"25%" , border:"solid ,blue", color:'blue'}}>Get Started</button>
        </div>
    <Navbar expand="lg" style={{ backgroundColor: "#1a1a1a" }}>
      <Container>
        {/* <Navbar.Brand href="#home" style={{ color: "white", fontFamily:"Butler", paddingRight:"26%"}}>CAFE </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/Home" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Home</Nav.Link>
             <Nav.Link as={Link} to="/Courses" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Courses</Nav.Link>
              <Nav.Link as={Link} to="/Mentorship" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Mentorship</Nav.Link>
               <Nav.Link as={Link} to="/Cto" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Cto</Nav.Link>
 <Nav.Link as={Link} to="/Contact" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Contact Us</Nav.Link>

          </Nav>
         
          <Nav.Link as={Link} to="/Aboutus" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}><PiUserCircleBold />  Signin</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div id="header2" style={{display:"flex", justifyContent:"center",alignItems:"center", backgroundColor:"black", color:'white'}}><p>"Inform me, and I might forget. Educate me, and I may remember. Engage me, and I will truly learn."</p></div>
 </>
   )
}
export  default Header