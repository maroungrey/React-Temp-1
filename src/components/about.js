import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';



export default function AppAbout() {
    const now = 60;
    return(
        <section id='about' className='block about-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>About Us</h2>
                <div className='subtitle'>What do we do?</div>
            </div>
            <Row>
            <Col sm={6}><Image src='https://placehold.co/400x400' /></Col>
            <Col sm={6}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='progress-block'>
                    <h4>Progress</h4>
                    <ProgressBar now={now} label={`${now}%`} />
                </div>
                
            </Col>
            </Row>
        </Container>
        </section>

    )
}