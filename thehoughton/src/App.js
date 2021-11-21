
import './App.css';

// Import Bootstrap:
import { Container } from 'react-bootstrap';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

import Application from './Components/Application';

function App() {

  let Apps = [
    { title: 'Synthia', path: '/Synthia@2x.png'},
    { title: 'Tune Track', path: '/TuneTrack@2x.png'},
    { title: 'Track The Ps', path: '/TrackThePs@2x.png'},
  ]


  return (
    <div className="App">
      <Navbar variant={'dark'} style={{backgroundColor: '#242424', color: 'white' }}>
        <Navbar.Brand className='navbar-header'><h1 className='navbar-brand'>The Houghton</h1></Navbar.Brand>
      </Navbar>



      
      <Container>
        <div className='ProjectTitle'>
          <h1>Tom Projects</h1>
        </div>
        
        <Row>
        {
          Apps.map((index) => {
            return <Col className='col-xs-4 d-flex justify-content-center'><Application title={index.title} path={index.path} /></Col>
          })
        }
        </Row>
      </Container>





    </div>
  );
}

export default App;
