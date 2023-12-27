import React, {useEffect, useState} from 'react';
import styles from "./DescriptionInput.css"

function DescriptionInput(props) {
    const [description, setDescription] = useState("")
    const [letters, setLetters] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const onBlurHandler = () => {
        setIsTouched(true);
    };

    function titleOnChange(event) {
        setDescription(event.target.value)
    }


    useEffect(() => {
        setLetters(description.trim().length >= 2);
    }, [description]);


    return (
        <div id="textArea">
            <p>აღწერა *</p>
            <textarea onBlur={onBlurHandler} onChange={titleOnChange} value={description} name="message"
                      placeholder="შეიყვანეთ სათაური"
                      className={` ${letters ? "successInput" : (isTouched ? 'unsuccessfulInput' : "")} descriptionTextArea`}/>
            <ul>
                <li className={letters ? "correct" : (isTouched ? 'incorrect' : '')}>მინიმუმ 2 სიმბოლო</li>
            </ul>
        </div>
    );
}

export default DescriptionInput;