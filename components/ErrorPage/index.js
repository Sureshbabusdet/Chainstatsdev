import MainLayout from '@/layouts/main/nav/MainLayout';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

export default function ErrorPage({ statusCode }) {
    let errorMessage = 'Page not found';
    switch (statusCode) {
        case 400:
            errorMessage = 'Page not found';
            break;
        case 401:
            errorMessage = 'Page not found';
            break;
        case 403:
            errorMessage = 'Page not found';
            break;
        case 404:
            errorMessage = 'Page not found';
            break;
        case 500:
            errorMessage = 'Page not found';
            break;
        default:
            errorMessage = 'Page not found';
            break;
    }

    return (
        <>
            <section className='error-sec'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className='text-center'>
                                <Image className='error-bg' fill={true} src="/img/404-bg.jpg" alt='error background' quality={100} />
                                <h3>Test</h3>
                                <h4>Sorry</h4>
                                <h1>404</h1>
                                <p>Message</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
