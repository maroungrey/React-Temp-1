import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
    {
        id: 1,
        link: 'https://google.com',
        image: 'https://placehold.co/150x100',
        title: 'Lorem Ipsum',
        subtitle: 'Web Design'
    },
    {
        id: 2,
        link: 'https://google.com',
        image: 'https://placehold.co/150x100',
        title: 'Lorem Ipsum',
        subtitle: 'Web Design'
    },
    {
        id: 3,
        link: 'https://google.com',
        image: 'https://placehold.co/150x100',
        title: 'Lorem Ipsum',
        subtitle: 'Web Design'
    },
    {
        id: 4,
        link: 'https://google.com',
        image: 'https://placehold.co/150x100',
        title: 'Lorem Ipsum',
        subtitle: 'Web Design'
    },
    {
        id: 5,
        link: 'https://google.com',
        image: 'https://placehold.co/150x100',
        title: 'Lorem Ipsum',
        subtitle: 'Web Design'
    },
    {
        id: 6,
        link: 'https://google.com',
        image: 'https://placehold.co/150x100',
        title: 'Lorem Ipsum',
        subtitle: 'Web Design'
    }
]

export default function AppWorks() {
    return (
        <section id='works' className='block works-block'>
             <Container fluid>
                <div className='title-holder'>
                    <h2>Our Works</h2>
                    <div className='subtitle'>our awesome works</div>
                </div>
                <Row className='portfolioList'>
                    {
                        worksData.map(works => {
                            return (
                                <Col sm={4} key={works.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href='#'>
                                            <Image src={works.image} />
                                            <div className='label text-center'>
                                                <h3>{works.title}</h3>
                                                <p>{works.subtitle}</p>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}