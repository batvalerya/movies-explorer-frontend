import AuthForm from "../AuthForm/AuthForm.js"

function Login() {
    return(
        <AuthForm
            isSignIn={true}
            authTitle={"Рады видеть!"}
            formName={"signin"}
            submitText={"Войти"}
            formQuestion={"Ещё не зарегистрированы?"}
            questionLink={"/sign-up"}
            questionLinkText={"Регистрация"}
        />
    )
};

export default Login;