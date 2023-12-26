'use client';
import React, {useState} from 'react';
import styles from "./UploadImageBox.css"

function UploadImageBox(props) {


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        props.getImage(file);
    };

    return (
        <>

            <label htmlFor="imageInput">
            <div id="uploadBox">
                <input id="imageInput" accept="image/*" type="file" onChange={handleFileChange}/>
                <img src="folder-add.svg" alt=""/>
                <p>ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span></p>


            </div>
            </label>
        </>
    );
}

export default UploadImageBox;