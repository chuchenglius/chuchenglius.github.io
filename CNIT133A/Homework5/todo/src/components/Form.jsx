import { useState, useEffect } from "react";
import Select from 'react-select'
import data from './class.json'

/*
const options = [
    { label: 'CNIT 131A - XML & JSON', name: 'CNIT 131A - XML & JSON' },
    { label: 'CNIT 132 - Intermediate HTML & CSS', name: 'CNIT 132 - Intermediate HTML & CSS' },
    { label: 'CNIT 132A - Advanced HTML & CSS', name: 'CNIT 132A - Advanced HTML & CSS' },
    { label: 'CNIT 133 - JavaScript, jQuery, AXAX', name: 'CNIT 133 - JavaScript, jQuery, AXAX' },
    { label: 'CNIT 133A - JavaScript Libraries/Frameworks', name: 'CNIT 133A - JavaScript Libraries/Frameworks' },
    { label: 'CNIT 133M - Mobile Web Dev with HTML, CSS, JS', name: 'CNIT 133M - Mobile Web Dev with HTML, CSS, JS' },
    { label: "CNIT 103 - Hardware", name: "CNIT 103 - Hardware" },
    { label: "CNIT 131 - Internet & Intro to HTML, CSS", name: "CNIT 131 - Internet & Intro to HTML, CSS" },
    { label: "CNIT 106 - Introduction to Networks", name: "CNIT 106 - Introduction to Networks" },
    { label: "CNIT 120 - Network Security", name: "CNIT 120 - Network Security" },
]*/

const options = data;

function Form(props) {
    const [exclass, setName] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask(exclass.name);
        setName("");
    }

    const handleChange = (myData) => {
        setName(myData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                What courses would you want to select?
                </label>
            </h2>
            <Select
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={exclass}
                options={options}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;  