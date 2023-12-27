import React, {useEffect, useState} from 'react';
import styles from "./BlogEmailInput.css";
import LoginError from "@/app/components/LoginError";

function BlogEmailInput(props) {
    const [email, setEmail] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const onBlurHandler = () => {
        setIsTouched(true);
        if (email.trim() === "") {
            setIsValid(true);
        }
    };

    function emailOnChange(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (newEmail === "" || newEmail.endsWith("@redberry.ge")) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    return (<div className="authorInputBox">
        <p>ელ-ფოსტა</p>
        <input
            onBlur={onBlurHandler}
            onChange={emailOnChange}
            value={email}
            type="text"
            placeholder="შეიყვანეთ სათაური"
            className={` ${isValid ? "successInput" : isTouched ? "unsuccessfulInput" : ""} formInputText`}
        />
        {isTouched && !isValid && (<LoginError>
            მეილი უნდა მთავრდებოდეს @redbery.ge-ით
        </LoginError>)}
    </div>);
}

export default BlogEmailInput;