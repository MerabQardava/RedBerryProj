import React, {useState} from 'react';
import styles from './LoginModal.css'
import LoginError from "@/app/components/LoginError";
import {error} from "next/dist/build/output/log";

function LoginModal(props) {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [errorLable, setErrorLable] = useState(<></>)

    let error1;
    const onBlurHandler = () => {
        setIsTouched(true);
    };


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
                    if (response.status == 204) {
                        localStorage.setItem('isLoggedIn', "true")
                    }else{
                        setErrorLable(<LoginError>ელ-ფოსტა არ მოიძებნა</LoginError>)
                    }
                })
        }else{
            setErrorLable(<LoginError>შეიყვანეთ ვალიდური ელ-ფოსტა</LoginError>)
        }



    }

    return (<>
        <div id="loginModal" onClick={props.toggleModal}></div>
        <div id="loginBox">
            <img src="add.svg" alt="" onClick={props.toggleModal}/>
            <h3>შესვლა</h3>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="loginEmail">ელ-ფოსტა</label>
                <input className="loginEmailClass" value={email} onBlur={onBlurHandler} onChange={handleEmailChange} type="text"
                       id={emailValid||!isTouched ? "loginEmail" : "loginEmailInvalid"} name="loginEmail"
                       placeholder="Example@redberry.ge"/>
                {errorLable}
                <button>შესვლა</button>
            </form>


        </div>

    </>);
}

export default LoginModal;