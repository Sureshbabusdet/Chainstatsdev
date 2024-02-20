import ErrorPage from "@/components/ErrorPage"
import MainLayout from "@/layouts/main/nav/MainLayout"


function Error({ statusCode }) {
    return (
        <ErrorPage statusCode={statusCode} />
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

Error.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Error