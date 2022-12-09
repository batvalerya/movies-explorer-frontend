import AuthForm from "../AuthForm/AuthForm.js"

function Register({ onRegister, loggedIn }) {

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
        />
    )
};

export default Register;