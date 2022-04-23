import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

function signin(props) {
    return (
        <Layout>
            <h1 className='text-center p-4'>
                LOGIN
            </h1>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <SigninComponent />
                </div>
            </div>
        </Layout>
    );
}

export default signin
;