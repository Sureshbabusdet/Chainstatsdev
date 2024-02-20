import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import parse from 'html-react-parser';
import MainLayout from "@/layouts/main/nav/MainLayout";
import { ACTION_ROUTES } from "@/constants/constant";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

TermsService.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function TermsService({ data }) {
    const router = useRouter();
    const locale = router.locale;

    // const metaData = {
    //     title: data[`${locale}_meta_title`],
    //     keywords: data[`${locale}_meta_keyword`],
    //     description: data[`${locale}_meta_description`],
    //     image: '',
    //     url: router.asPath,
    //     type: 'website',
    // };

    // console.log('Terms & Condition', data);
    return (
        <>
            {/* <Seo {...metaData} /> */}
            <section className="site-documents-area">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="">{data[`${locale}_title`]}</h1>
                            <div>
                                {parse(data[`${locale}_description`])}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const response = await apiService.get(ACTION_ROUTES.TermsAPI);
        const infodata = response || {};
        return {
            props: {
                data: infodata,
                error: false,
            },
        };
    } catch (error) {
        // Handle the error scenario
        console.error('Error fetching data:', error);
        return {
            props: {
                data: {}, // Provide an empty object in case of an error
                error: true,
            },
        };
    }
}