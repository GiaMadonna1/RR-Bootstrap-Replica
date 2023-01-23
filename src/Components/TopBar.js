// import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

// function topBar () {
 //   return (
  //      <>
 //       <Navbar bg='light'>
  //          <Container>
  //              <Navbar.Brand href='#home'>
   //                 <img
  //                      src='./public/instacart-3628849-3030126.webp'
   //                     width='30'
   //                     height='30'
   //                     className='d-inline-block align-top'
   //                     alt='instacart logo'
    //                />{' '}
    //                instacart
    //            </Navbar.Brand>
    //        </Container>
    //    </Navbar>
    //    </>
 //   )
// }

function topBar () {
    <Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="./public/instacart-3628849-3030126.webp" alt='instacart logo' /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>

}
export default topBar