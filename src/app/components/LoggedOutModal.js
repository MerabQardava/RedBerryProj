import React from 'react';

function LoggedOutModal(props) {
    return (<>
            <div id="loginModal" onClick={props.toggleModal}></div>
            <div id="loginBox">
                <img src="add.svg" alt="" onClick={props.toggleModal}/>
                <h3>შესვლა</h3>
                <form onSubmit={props.onSubmitHandler}>
                    <label htmlFor="loginEmail">ელ-ფოსტა</label>
                    <input className="loginEmailClass" value={props.email} onBlur={props.onBlurHandler} onChange={props.handleEmailChange}
                           type="text"
                           id={props.emailValid || !props.isTouched ? "loginEmail" : "loginEmailInvalid"} name="loginEmail"
                           placeholder="Example@redberry.ge"/>
                    {props.errorLable}
                    <button>შესვლა</button>
                </form>
            </div>
        </>

    );
}

export default LoggedOutModal;