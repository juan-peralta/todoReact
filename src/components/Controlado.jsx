import { useState } from "react";

const Controlado = () => {

    //    const [title,setTitle] = useState("todo01");
    //    const [description,setDescription] = useState("descripcion 1");
    //    const [state,setState] = useState("pendiente");

    const [todo, setTodo] = useState({
        title: 'Todo 01',
        description: 'description',
        state: 'pendiente',
        priority: true
    })

    const {title, description,state,priority} = todo
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state)
    }
    const handleChange = (e) => {

        //desestructuracion
        const {name,type, checked, value} = e.target
        console.log(value)
        console.log(name)

        setTodo({
            ...todo,
            [name]: type === 'checkbox'? checked : value
        })
    };

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="title" value={title} onChange={handleChange} />

            <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description" value={description} onChange={handleChange} ></textarea>
            <input type="checkbox" name="priority" checked={priority} className="form-check-input mb-2" onChange={handleChange} id="inputcheck" />
            <label htmlFor="inputcheck">Dar Prioridad</label>
            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="terminado">Terminado</option>
            </select>
            <button type="submit" className="btn btn-dark">Procesar</button>

        </form>
    )
}
export default Controlado;