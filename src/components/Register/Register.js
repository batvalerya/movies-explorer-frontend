import AuthForm from "../AuthForm/AuthForm.js"

function Register({ onRegister, loggedIn, registerMessage, isLoading }) {

    function handleChangeSubmit (registerData) {
        onRegister(registerData);
    }

    return(
        <AuthForm
            isSignIn={loggedIn}
            handleChangeSubmit={handleChangeSubmit}
            authTitle={"Добро пожаловать!"}
            formName={"signup"}
            submitText={"Зарегистрироваться"}
            formQuestion={"Уже зарегистрированы?"}
            questionLink={"/signin"}
            questionLinkText={"Войти"}
            errorRegisterMessage={registerMessage}
            isLoading={isLoading}
        />
    )
};

export default Register;