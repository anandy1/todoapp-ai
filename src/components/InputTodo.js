import React, {Fragment, useState} from "react";


const InputTodo = ()=> {

    const [description, setDecription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault() ;
        try {

            const body = { description };
            const response = await fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: {"content-type":"application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
           
        } catch (error) {
            console.error(error.message);
        }
    }

    const emptyCheck = () => {
        if(description === '') {
            alert('Empty');
        }
    }


    return (
    <Fragment>
        <h1 className="text-center mt-5">Pern Todo List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" 
                className="form-control" 
                value={description} 
                onChange={e => setDecription(e.target.value)}
            />
            <button className="btn btn-success" onClick={emptyCheck}>Add</button>
        </form>
    </Fragment>
    )
};

export default InputTodo;
