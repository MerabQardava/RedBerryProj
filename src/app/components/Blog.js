import React from 'react';
import styles from "./Blog.css"
import Tag from "@/app/components/Tag";
import Link from "next/link";

function Blog(props) {
    const originalDate = props.publish_date
    const [year, month, day] = originalDate.split("-")
    const newDate = `${day}.${month}.${year}`

    // function saveBlog(){
    //     props.save(props.id)
    //
    // }


    return (
        <div id="card">
            <img id="photo" src={props.image} alt=""/>

            <div id="content">
                <p id="name">{props.author}</p>
                <p id="date">{newDate}</p>
                <h3 id="Blogtitle">{props.title}</h3>
                <div id="blogTagContainer">

                    {props.tag ? props.tag.map((tags) => {
                        return <Tag highlighted={false} id={tags.id} key={tags.id}
                                    color={tags.text_color}
                                    background_color={tags.background_color}
                                    title={tags.title}></Tag>
                    }) : ""}
                </div>


                <p id="description">{props.description}</p>
                <Link href={`/${props.id}`} id="link_container">
                    <p  id="link">სრულად ნახვა</p>

                </Link>

            </div>


        </div>
    );
}

export default Blog;