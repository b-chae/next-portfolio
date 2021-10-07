import Link from "next/link"
import Layout from "../components/Layout"

export default () => (
    <Layout title="About">
        <Link href="/">
            Go to Home
        </Link>
        <p>A JavaScript Programmer</p>
        <img src="/static/assignment_sample.png" alt="image" height="200px"/>
    </Layout>
)