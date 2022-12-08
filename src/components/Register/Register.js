import { useState } from 'react';
import AuthForm from "../AuthForm/AuthForm.js"

function Register({ onRegister, loggedIn }) {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        })
    }

    const handleChangeSubmit = (e) => {
        e.preventDefault();

        onRegister(registerData);
    }

    return(
        <AuthForm
            isSignIn={loggedIn}
            handleChangeSubmit={handleChangeSubmit}
            handleChange={handleChange}
            authTitle={"Добро пожаловать!"}
            name={registerData.name}
            email={registerData.email}
            password={registerData.password}
            formName={"signup"}
            submitText={"Зарегистрироваться"}
            formQuestion={"Уже зарегистрированы?"}
            questionLink={"/signin"}
            questionLinkText={"Войти"}
        />
    )
};

export default Register;