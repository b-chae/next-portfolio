import Link from "next/link";
import Layout from "../components/Layout";

const MyIndex = () => (
    <Layout title="Home">
        <Link href="/about">
            Go to About
        </Link>
    </Layout>
)

export default MyIndex
