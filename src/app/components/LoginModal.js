'use client';
import React, {useState} from 'react';
import styles from './LoginModal.css'
import LoginError from "@/app/components/LoginError";
import {error} from "next/dist/build/output/log";
import LoggedOutModal from "@/app/components/LoggedOutModal";
import LoggedInModal from "@/app/components/LoggedInModal";
function LoginModal(props) {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [errorLable, setErrorLable] = useState(<></>)
    const [logged, setLogged] = useState(false)



    const onBlurHandler = () => {
        setIsTouched(true);
    };

    const loginSuccess=()=>{
        props.toggleLoginHandler()
        props.toggleModal()
    }



    function handleEmailChange(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (newEmail.trim() !== "" && newEmail.endsWith("@redberry.ge")) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }


    function onSubmitHandler(event) {
        event.preventDefault()
        // console.log(emailValid)

        const requestData = {
            email: email,
        };
        if(emailValid){
            fetch('https://api.blog.redberryinternship.ge/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
                .then(response => {
                    if (response.status === 204) {
                        localStorage.setItem('isLoggedIn', "true")
                        setLogged(true)



                    }else{
                        setErrorLable(<LoginError>ელ-ფოსტა არ მოიძებნა</LoginError>)
                    }
                })
        }else{
            setErrorLable(<LoginError>შეიყვანეთ ვალიდური ელ-ფოსტა</LoginError>)
        }



    }

    return (<>{!logged?

        <LoggedOutModal
                        toggleModal={props.toggleModal}
                        onSubmitHandler={onSubmitHandler}
                        email={email}
                        onBlurHandler={onBlurHandler}
                        handleEmailChange={handleEmailChange}
                        emailValid={emailValid}
                        isTouched={isTouched}
                        errorLable={errorLable}
        />:

        <LoggedInModal toggleModal={loginSuccess}/>
    }

    </>);
}

export default LoginModal;