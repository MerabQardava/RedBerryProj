import React from 'react';
import styles from './AuthorInput.css'
function AuthorInput(props) {
    return (
        <div id="authorInputBox">
            <p>ავტორი *</p>
            <input type="text" placeholder="შეიყვანეთ ტექსტი" className="formInputText"/>
            <ul>
                <li className="requirements">მინიმუმ 4 სიმბოლო</li>
                <li className="requirements">მინიმუმ ორი სიტყვა</li>
                <li className="requirements">მხოლოდ ქართული სიმბოლოები</li>
            </ul>
        </div>
    );
}

export default AuthorInput;