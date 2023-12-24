import React from 'react';
import styles from "./Tag.css"

function Tag(props) {

    return (
        <div class="tag_container"
             style={{color: props.color, backgroundColor: props.background_color}}>{props.title}</div>
    );

}

export default Tag;