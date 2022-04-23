import Layout from "../components/Layout";
import Link from "next/link";
import SignupComponent from "../components/auth/SignupComponent";

function signup(props) {
    return (
        <Layout>
            <h1 className='text-center p-4'>
                SIGNUP
            </h1>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <SignupComponent />
                </div>
            </div>
        </Layout>
    );
}

export default signup
;