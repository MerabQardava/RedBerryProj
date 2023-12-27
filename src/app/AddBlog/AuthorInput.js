import React, {useEffect, useState} from 'react';
import styles from './AuthorInput.css'

function AuthorInput(props) {
    const [author, setAuthor] = useState("")
    const [letters, setLetters] = useState(false);
    const [words, setWords] = useState(false);
    const [isGeorgian, setIsGeorgian] = useState(false);
    const [isTouched, setIsTouched] = useState(false);


    useEffect(() => {
        if(localStorage.getItem('author')){
           setAuthor(localStorage.getItem('author'))
        }
    }, []);
    const onBlurHandler = () => {
        setIsTouched(true);
    };

    function authorOnChange(event) {
        let value = event.target.value
        localStorage.setItem('author', value);
        setAuthor(value)
        props.updateForm({
            author: {
                value: value,
                isValid: letters && words && isGeorgian
            }
        })

    }


    useEffect(() => {
        const georgianRegex = /^[\u10D0-\u10FF\s]+$/;
        setLetters(author.trim().length >= 4);
        setWords(author.trim().split(" ").length >= 2)
        setIsGeorgian(georgianRegex.test(author.trim()))
    }, [author]);


    return (
        <div className="authorInputBox">
            <p>ავტორი *</p>
            <input onBlur={onBlurHandler} onChange={authorOnChange} value={author} type="text"
                   placeholder="შეიყვანეთ ტექსტი"
                   className={` ${letters && words && isGeorgian ? "successInput" : (isTouched ? 'unsuccessfulInput' : "")} formInputText`}/>
            <ul>
                <li className={letters ? "correct" : (isTouched ? 'incorrect' : '')}>მინიმუმ 4 სიმბოლო</li>
                <li className={words ? "correct" : (isTouched ? 'incorrect' : '')}>მინიმუმ ორი სიტყვა</li>
                <li className={isGeorgian ? "correct" : (isTouched ? 'incorrect' : '')}>მხოლოდ ქართული სიმბოლოები</li>
            </ul>
        </div>
    );
}

export default AuthorInput;