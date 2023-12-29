import React, {useEffect, useState} from 'react';
import styles from "./Slider.css"
import Blog from "@/app/components/Blog";

function Slider(props) {
    const [allBlogs, setAllBlogs] = useState()
    const [similar, setSimilar] = useState([])

    // console.log(props.categories)

    useEffect(() => {
        const getCategories = async (token) => {
            const query = await fetch("https://api.blog.redberryinternship.ge/api/blogs", {
                method: 'GET', headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const response = await query.json()
            setAllBlogs(response.data)
            // console.log(response.data)
        }

        getCategories("bd21a7cb74229b18566fbaf79a6b79c175f6215124cd41dc7ce0445d1c114700")

    }, []);

    // useEffect(() => {
    //     if(allBlogs){
    //
    //         let sus=[]
    //         allBlogs.map(tag=>{
    //             if(tag.categories.some(item1 => props.categories.some(item2 => item1.id === item2.id))){
    //                 // setSimilar((prevArray) => [...prevArray, tag])
    //                 sus.push(tag)
    //             }
    //         })
    //         // setSimilar(sus)
    //         console.log(sus)
    //     }
    //
    // }, [allBlogs]);



    return (
        <div id="sliderContainer">
            {allBlogs?allBlogs.map(tag=>{
                if(tag.categories.some(item1 => props.categories.some(item2 => item1.id === item2.id))){
                    return <Blog key={tag.id} id={tag.id} author={tag.author}
                                 description={tag.description}
                                 tag={tag.categories} publish_date={tag.publish_date}
                                 title={tag.title} image={tag.image}/>
                }
            }):""}

        </div>
    );
}

export default Slider;