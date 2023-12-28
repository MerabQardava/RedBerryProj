import React from 'react';
import styles from "./Tag.css"

function Tag(props) {
    function test() {
        if(props.getter){
            props.getter(props.id)


        }

    }


    function removeTag(){
        props.deleteTag(props.id)

    }

    return (<>


        {!props.del ? <div onClick={test} className={`${props.highlighted?"highlighted":""} tag_container`}
                          style={{color: props.color, backgroundColor: props.background_color,cursor:"pointer"}}>{props.title}

        </div> : <div className="tag_container"
                      style={{color: props.color, backgroundColor: props.background_color}}>{props.title}
            <img onClick={removeTag} style={{marginLeft:"8px",cursor:"pointer"}} src="addWhite.svg" alt=""/>
        </div>

        }
    </>);

}

export default Tag;