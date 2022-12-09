import AuthForm from "../AuthForm/AuthForm.js"

function Register({ onRegister, loggedIn, registerMessage }) {

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
        />
    )
};

export default Register;