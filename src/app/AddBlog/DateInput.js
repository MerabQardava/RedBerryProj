import React, {useEffect, useState} from 'react';

function DateInput(props) {
    const [date, setDate] = useState("")
    const [isTouched, setIsTouched] = useState(false);


    function dateOnChange(event) {
        let value = event.target.value
        setDate(value)
        props.updateForm({publish_date:value})
    }

    // console.log(date)

    const onBlurHandler = () => {
        setIsTouched(true);
    };


    // useEffect(() => {
    //     setLetters(title.trim().length >= 2);
    // }, [title]);


    return (
        <div className="dateInputBox">
            <p>გამოქვეყნების თარიღი *</p>
            <input className={` ${date !== "" ? "successInput" : (isTouched ? 'unsuccessfulInput' : "")} formInputText`}
                   onChange={dateOnChange} onBlur={onBlurHandler} value={date} type="date"/>
        </div>
    );
}

export default DateInput;