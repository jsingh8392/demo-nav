import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import {Home} from './Components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (

        <BrowserRouter>
      <div className="App">
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Home">Home</Nav.Link>
      <Nav.Link as={Link} to="/About">About</Nav.Link>
      <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
 
  <div>
      <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>          
      </Routes>
  </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
