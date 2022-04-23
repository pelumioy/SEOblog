import Layout from "../components/Layout";
import Link from 'next/link'


function index(props) {
    return (
        <Layout>
            <h1>hello worlds</h1>
            <Link href='/signup'>
                <a>Signup</a>
            </Link>
        </Layout>
    );
}

export default index;