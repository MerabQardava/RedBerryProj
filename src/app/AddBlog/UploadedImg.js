import React from 'react';
import styles from "./UploadedImg.css"
function UploadedImg(props) {

    function onDelete(){
        // props.getImage(null)
        localStorage.setItem('image', "");
        props.updateForm({image:""})
        // console.log("delete")
    }


    return (
        <div id="uploadedBox">
            <div>
                <img src="gallery.svg" alt=""/>
                <span>{props.img}</span>
            </div>

            <img src="add.svg" onClick={onDelete} alt="" id="deleteImg"/>

        </div>
    );
}

export default UploadedImg;