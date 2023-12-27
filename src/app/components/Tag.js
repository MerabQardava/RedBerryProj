import React from 'react';
import styles from "./Tag.css"

function Tag(props) {
    function test(){
        props.getter(props.id)
    }

    return (
        <div onClick={test} className="tag_container"
             style={{color: props.color, backgroundColor: props.background_color}}>{props.title}</div>
    );

}

export default Tag;