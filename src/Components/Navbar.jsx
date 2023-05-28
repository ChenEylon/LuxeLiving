import { Link, Outlet } from "react-router-dom";
import './Components.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Components.css'
import { CDBModalFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
export default function NavBar() {
  
  return (
    <><div className="navbar">
      <Navbar className="navbar"  variant="dark">
        <Container><div className="navi">
          <Navbar.Brand ><img className="logo" src="../../Realestatelogo.png" alt="LuxeLiving Logo" /></Navbar.Brand>
          <Nav className="me-auto"><div className="me-auto">
            <span className="link"> <Link to='home' className="link">Home</Link></span>
            <span className="link"> <Link to='/properties' className="link">Properties</Link></span>
            <span className="link"><Link to='/agents' className="link">Our agents</Link></span>
            <span className="link"><Link to='/aboutus' className="link">About us </Link></span>
            <span className="link"><Link to="/contact" className="link">Contact us</Link></span>
         </div> </Nav>
        </div>
        </Container>
      </Navbar></div>
      <Outlet />
      <CDBModalFooter className="shadow">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img className="logo" src="../../Realestatelogo.png" alt="LuxeLiving Logo" />
                <span className="ms-3 h5 font-weight-bold">LuxeLiving</span>
              </a>
              <p className="my-3" style={{ width: '250px' }}>
                Empowering real estate journeys with quality resources and seamless solutions.
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="linkedin-in" />
                </CDBBtn>

              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Real Estate
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>
                <Link>Resources</Link>
                <Link> About Us</Link>
                <Link> Contact</Link>
                <Link> Blog</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>
                <Link>Support</Link>
                <Link>Sign Up</Link>
                <Link>Sign In</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Products
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>
                <Link>Windframe</Link>
                <Link>Loop</Link>
                <Link>Contrast</Link>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">&copy; Chen Eylon.</small>
        </CDBBox>
      </CDBModalFooter>


    </>

  );
}

