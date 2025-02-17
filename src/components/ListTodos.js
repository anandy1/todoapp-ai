import React, {Fragment, useEffect, useState} from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:8000/todos");
            const jsonResponse = await response.json();
            setTodos(jsonResponse);
        } catch (err) {
            console.error(err.message)
        }

    }

    useEffect(() => {
        getTodos();
    }, [])

    return(
        <Fragment>
            <table className="table table-striped mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {todos.map(todo => (
        <tr>
            <td>{todo.description}</td>
            <td><button className="btn btn-outline-primary">Edit</button></td>
            <td><button className="btn btn-outline-danger">Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodos;