import Layout from "../components/Layout";

export default ({ statusCode }) => (
    <Layout title="Error!">
        {statusCode ? 
            `Something went wrong : ${statusCode}`
            :
            <p>Could'nt get that page, sorry!</p>
        }
        
    </Layout>
)