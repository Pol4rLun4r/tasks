import Logo from "../../components/login-and-register/@Logo"
import Window from "../../components/login-and-register/style/Window"
import Form from "../../components/login-and-register/login/Form"
import Sign from "../../components/login-and-register/@sign-In@Up"
import Layout from "../../components/layouts/layoutPublic/Layout"

const Login = () => {
    return (
        <Layout>
            <Window>
                <Logo text="Login" />
                <Form />
                <Sign
                    link="/register"
                    question="Novo por aqui?"
                    textLink="Sign Up"
                />
            </Window>
        </Layout >
    )
}

export default Login