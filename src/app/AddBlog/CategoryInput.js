import React, {useEffect, useState} from 'react';
import styles from "./CategoryInput.css"
import Tag from "@/app/components/Tag";

function CategoryInput(props) {

    const [categories, setCategories] = useState()
    const [toggleMenu, setToggleMenu] = useState(false)
    const [chosen, setChosen] = useState([])

    function toggleTagMenu() {
        setToggleMenu((prev) => !prev)
    }


    useEffect(() => {
        const getCategories = async () => {
            const query = await fetch("https://api.blog.redberryinternship.ge/api/categories")
            const response = await query.json()
            // console.log(response.data[0])
            setCategories(response.data)
        }
        getCategories()

    }, []);


    return (<div className="dateInputBox">
            <p>გამოქვეყნების თარიღი *</p>

            <div className="CategoryInputBox">
                <p>აირჩიეთ კატეგორია</p>
                <img style={{cursor: "pointer"}} onClick={toggleTagMenu} src="arrow-down.svg" id="openCategoryMenu"
                     alt=""/>


            </div>
            {toggleMenu && <div id="test">
                {categories ? categories.map((tags) => {
                    return (<Tag key={tags.id} color={tags.text_color}
                                 background_color={tags.background_color}
                                 title={tags.title}></Tag>)
                }) : <></>}
            </div>}


        </div>


    );
}

export default CategoryInput;