import React from 'react';
import styles from "./Tag.css"
function Tag(props) {
    const tagText={
        market:"მარკეტი",
        application:"აპლიკაცია",
        ai:"ხელოვნური ინტელექტი",
        ui_ux:"UI/UX",
        research:"კვლევა",
        figma:"Figma"
    }

    return (
        <div class="tag_container" id={props.tag}>{tagText[(props.tag)]}</div>
    );
}

export default Tag;