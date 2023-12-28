import React from 'react';
import styles from "./BlogSuccess.css"
import Link from "next/link";
function BlogSuccess(props) {
    return (
        <div id="successModalBox">
            <div id="successModal">
                <img src="add.svg" alt="" onClick={props.toggleModal}/>

                <img src="tick-circle.svg" alt=""/>

                <p id="successH3">ჩანაწერი წარმატებით დაემატა</p>
                <Link href="/">
                    <button onClick={props.toggleModal}>მთავარ გვერდზე დაბრუნება</button>
                </Link>

            </div>


        </div>
    );
}

export default BlogSuccess;