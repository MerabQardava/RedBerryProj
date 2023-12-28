'use client';
import React, {useEffect, useState} from 'react';
import styles from "./CategroiesBar.css"
import Tag from "@/app/components/Tag";

function CategoriesBar(props) {

    const [categories, setCategories] = useState()



    // console.log(filter)

    useEffect(() => {
        const getCategories = async () => {
            const query = await fetch("https://api.blog.redberryinternship.ge/api/categories")
            const response = await query.json()
            // console.log(response.data[0])
            setCategories(response.data)
            // console.log(response)
        }
        getCategories()

    }, []);

    // console.log(categories)


    return (<div id="categoriesBar">
        {/*<Tag color={categories.text_color} background_color={categories.background_color} title={categories.title}></Tag>*/}
        {categories ? categories.map((tags) => {
            return (<Tag getter={props.addFilter} highlighted={props.filter.includes(tags.id)} id={tags.id} key={tags.id} color={tags.text_color}
                         background_color={tags.background_color}
                         title={tags.title}></Tag>)
        }) : <></>}
    </div>);
}


export default CategoriesBar;