import { useState } from 'react';
import AuthForm from "../AuthForm/AuthForm.js"

function Login({ onLogin, loggedIn }) {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        })
    }

    const handleChangeSubmit = (e) => {
        e.preventDefault();

        if(!loginData.email || !loginData.password) {
            return;
        } else {
            onLogin(loginData)
            .then(() => {
                setLoginData({
                    email: '',
                    password: ''
                })
            })
            .catch(() => {
                console.log('Ошибка')
            })
        }   
    }
    return(
        <AuthForm
            isSignIn={!loggedIn}
            handleChangeSubmit={handleChangeSubmit}
            handleChange={handleChange}
            email={loginData.email}
            password={loginData.password}
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