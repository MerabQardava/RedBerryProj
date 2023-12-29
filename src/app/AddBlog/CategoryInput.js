import React, {useEffect, useState} from 'react';
import styles from "./CategoryInput.css"
import Tag from "@/app/components/Tag";

function CategoryInput(props) {

    const [categories, setCategories] = useState()
    const [toggleMenu, setToggleMenu] = useState(false)
    const [chosen, setChosen] = useState([])

        console.log("mech")
    useEffect(() => {
        localStorage.setItem("chosen",chosen)

    }, [chosen]);

    // useEffect(() => {
    //     if(chosen.length===0){
    //         setChosen(localStorage.g)
    //     }
    //
    // }, []);





    function toggleTagMenu() {
        setToggleMenu((prev) => !prev)

    }

    function deleteTag(id){
        // console.log(chosen)

        const updatedArray = chosen.filter((item) => item !== id+1);
        setChosen(updatedArray);


    }

    useEffect(() => {
        if (localStorage.getItem('categories')) {
            setChosen(JSON.parse(localStorage.getItem('categories')))
        }

    }, []);

    useEffect(() => {
        props.updateForm({categories: chosen})
    }, [chosen]);


    function addTag(element) {
        if (!chosen.includes(element)) {
            const newArray = [...chosen, element];
            setChosen(newArray);
            localStorage.setItem('categories', JSON.stringify(newArray));


        }
    }

    // console.log(chosen)


    useEffect(() => {
        const getCategories = async () => {
            const query = await fetch("https://api.blog.redberryinternship.ge/api/categories")
            const response = await query.json()
            // console.log(response.data[0])
            setCategories(response.data)
        }
        getCategories()

    }, []);

    // let mech=6;
    // //
    // if(toggleMenu){
    // console.log(categories)
    //
    // }


    return (<div className="dateInputBox">
            <p>კატეგორია *</p>

            <div className="CategoryInputBox">
                {chosen.length > 0 ? chosen.map((tags) => {
                    if (categories) {

                        return <Tag deleteTag={deleteTag} id={tags - 1} key={tags - 1} color={categories[tags - 1].text_color}
                                    background_color={categories[tags - 1].background_color}
                                    title={categories[tags - 1].title}
                                    del={true}
                        />
                    }


                }) : <p id="categoryPlaceholder">აირჩიეთ კატეგორია</p>}
                <div id="arrowContainer">
                    <img style={{cursor: "pointer"}} onClick={toggleTagMenu} src="arrow-down.svg" id="openCategoryMenu"
                         alt=""/>
                </div>


            </div>
            {toggleMenu && <div id="test">
                {categories ? categories.map((tags) => {
                    return (<Tag getter={addTag} id={tags.id} key={tags.id} color={tags.text_color}
                                 background_color={tags.background_color}
                                 title={tags.title}></Tag>)
                }) : <></>}
            </div>}


        </div>


    );
}

export default CategoryInput;