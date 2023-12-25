import React from 'react';
import styles from "./LoginError.css"
function LoginError(props) {
    return (
        <p id="loginError">
            {props.children}
        </p>
    );
}

export default LoginError;