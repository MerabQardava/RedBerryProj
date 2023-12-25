import React from 'react';

function LoggedInModal(props) {
    return (<>
            <div id="loginModal" onClick={props.toggleModal}></div>
            <div id="loginBox">

                <img src="add.svg" alt="" onClick={props.toggleModal}/>

                <img src="tick-circle.svg" alt=""/>

                <p id="successH3">წარმატებული ავტორიზაცია</p>

                <button onClick={props.toggleModal}>კარგი</button>

            </div>
        </>
    );
}

export default LoggedInModal;