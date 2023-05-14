import Layout from "../../components/layouts/layoutPublic/Layout"
import Logo from "../../components/login-and-register/@Logo"
import Window from "../../components/login-and-register/style/Window"
import Form from "../../components/login-and-register/register/Form"
import Sign from "../../components/login-and-register/@sign-In@Up"

const Register = () => {
    return (
        <>
            <Layout>
                <Window>
                    <Logo text="Register" />
                    <Form />
                    <Sign
                        link="/login"
                        question="Já tem uma conta?"
                        textLink="Sign In"
                    />
                </Window>
            </Layout>
        </>
    )
}

export default Register