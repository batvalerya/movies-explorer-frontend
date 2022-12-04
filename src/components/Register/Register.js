import AuthForm from "../AuthForm/AuthForm.js"

function Register() {
    return(
        <AuthForm
            isSignIn={false}
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