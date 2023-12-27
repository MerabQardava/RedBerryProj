import React, {useEffect, useState} from 'react';

function TitleInput(props) {
    const [title, setTitle] = useState("")
    const [letters, setLetters] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const onBlurHandler = () => {
        setIsTouched(true);
    };

    function titleOnChange(event) {
        setTitle(event.target.value)
    }


    useEffect(() => {
        setLetters(title.trim().length >= 2);
    }, [title]);


    return (
        <div className="authorInputBox">
            <p>სათაური *</p>
            <input onBlur={onBlurHandler} onChange={titleOnChange} value={title} type="text"
                   placeholder="შეიყვანეთ სათაური"
                   className={` ${letters  ? "successInput" : (isTouched ? 'unsuccessfulInput' : "")} formInputText`}/>
            <ul>
                <li className={letters ? "correct" : (isTouched ? 'incorrect' : '')}>მინიმუმ 2 სიმბოლო</li>
            </ul>
        </div>
    );
}

export default TitleInput;