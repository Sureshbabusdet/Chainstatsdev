import Head from 'next/head';
import { useRouter } from 'next/router';

function Seo({ title, description, keywords, image, url, type }) {
    const router = useRouter();
    const locale = router.locale;
    const SITE_URL = process.env.SITE_URL;
    const DefaultImage = `${SITE_URL}/img/Vet360_PreviewImage_Social.jpeg`;
    
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>

            {/* Default Tags */}
            <meta name="type" content={type} />
            <meta name="title" content={title} />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />

            {/* Open Graph (OG) Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || DefaultImage} />
            <meta property="og:url" content={SITE_URL + url} />

            {/* Twitter Card Tags (Optional) */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image || DefaultImage} />
            <meta name="twitter:url" content={SITE_URL + url} />
        </Head>
    );
}

export default Seo;
