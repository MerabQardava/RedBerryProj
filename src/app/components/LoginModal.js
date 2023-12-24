import React, {useState} from 'react';
import styles from './LoginModal.css'

function LoginModal(props) {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);

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

        fetch('https://api.blog.redberryinternship.ge/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
            .then(response => {
                console.log(localStorage.getItem('isLoggedIn'))
                if(response.status==204){
                    localStorage.setItem('isLoggedIn', "true")
                }

                console.log(localStorage.getItem('isLoggedIn'))
            })

    }

    return (<>
        <div id="loginModal" onClick={props.toggleModal}></div>
        <div id="loginBox">
            <img src="add.svg" alt="" onClick={props.toggleModal}/>
            <h3>შესვლა</h3>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="loginEmail">Email</label>
                <input value={email} onChange={handleEmailChange} type="text"
                       id={emailValid ? "loginEmail" : "loginEmailInvalid"} name="loginEmail"
                       placeholder="Example@redberry.ge"/>
                <button>შესვლა</button>
            </form>


        </div>

    </>);
}

export default LoginModal;