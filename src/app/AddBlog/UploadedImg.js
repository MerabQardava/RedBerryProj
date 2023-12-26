import React from 'react';
import styles from "./UploadedImg.css"
function UploadedImg(props) {

    function onDelete(){
        props.getImage(null)

    }


    return (
        <div id="uploadedBox">
            <div>
                <img src="gallery.svg" alt=""/>
                <span>{props.img.name}</span>
            </div>

            <img src="add.svg" onClick={onDelete} alt="" id="deleteImg"/>

        </div>
    );
}

export default UploadedImg;