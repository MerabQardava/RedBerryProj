import React, {useEffect, useState} from 'react';
import styles from './AuthorInput.css'
function AuthorInput(props) {
    const [author, setAuthor] = useState("")
    const [letters,setLetters]=useState(false);
    const [words,setWords]=useState(false);
    const [isGeorgian, setIsGeorgian] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const onBlurHandler = () => {
        setIsTouched(true);
    };

    function authorOnChange(event){
        setAuthor(event.target.value)

    }



    useEffect(() => {
        const georgianRegex = /^[\u10D0-\u10FF\s]+$/;
        setLetters(author.trim().length >=4);
        setWords(author.trim().split(" ").length>=2)
        setIsGeorgian(georgianRegex.test(author.trim()))
    }, [author]);




    return (
        <div className="authorInputBox">
            <p>ავტორი *</p>
            <input onBlur={onBlurHandler} onChange={authorOnChange} value={author} type="text" placeholder="შეიყვანეთ ავტორი" className="formInputText"/>
            <ul>
                <li className={letters?"correct":(isTouched ? 'incorrect' : '')}>მინიმუმ 4 სიმბოლო</li>
                <li className={words?"correct":(isTouched ? 'incorrect' : '')}>მინიმუმ ორი სიტყვა</li>
                <li className={isGeorgian?"correct":(isTouched ? 'incorrect' : '')}>მხოლოდ ქართული სიმბოლოები</li>
            </ul>
        </div>
    );
}

export default AuthorInput;