'use client';
import React, {useState} from 'react';
import styles from "./UploadImageBox.css"

function UploadImageBox(props) {

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();

        const files = event.dataTransfer.files;

        if (files.length > 0) {

            props.getImage(files[0]);
        }
    }


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        props.getImage(file);
    };

    return (<>

        <label htmlFor="imageInput">
            <div id="uploadBox" onDragOver={handleDragOver}
                 onDrop={handleDrop}>
                <input id="imageInput" accept="image/*" type="file" onChange={handleFileChange}/>
                <img src="folder-add.svg" alt=""/>
                <p>ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span></p>


            </div>
        </label>
    </>);
}

export default UploadImageBox;