import AuthForm from "../AuthForm/AuthForm.js"

function Login({ onLogin, loggedIn }) {

    function handleChangeSubmit (loginData) {
        onLogin(loginData);
    }

    return(
        <AuthForm
            isSignIn={!loggedIn}
            handleChangeSubmit={handleChangeSubmit}
            authTitle={"Рады видеть!"}
            formName={"signin"}
            submitText={"Войти"}
            formQuestion={"Ещё не зарегистрированы?"}
            questionLink={"/signup"}
            questionLinkText={"Регистрация"}
        />
    )
};

export default Login;