import React, { Component } from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand style={{marginLeft:'-110px',padding:'0 10px',color:'white'}}>
        {/* <img src='https://www.pngkey.com/png/detail/67-671370_cars-logo-brands-png-pic-german-car-logos.png' height='100' width='100' /> */}
        
Car-APPlication

    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to='/' style={{padding:'0 15px',textDecoration:'none'}} >Home</Link>
        <Link to='/favourite'style={{padding:'0 15px',textDecoration:'none'}}  >Favourite</Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}

export default Header
