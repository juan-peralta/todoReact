import { useState } from "react";
import Swal from 'sweetalert2'

const Formulario = ({addTodo}) => {


    const [todo, setTodo] = useState({
        title: 'Todo 01',
        description: 'description',
        state: 'pendiente',
        priority: true
    })

    const {title, description,state,priority} = todo
    const handleSubmit = (e) => {
        e.preventDefault();


        if(!title.trim()|| !description.trim()){

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "titulo o descripcion obligarios",
                
              });

              
        }

     addTodo({
        id: Date.now(),
        ...todo,
        state: state === 'completado'

     })
     Swal.fire({
        position: "center",
        icon: "success",
        title: "Todo agregado correctamente",
        showConfirmButton: false,
        timer: 1500
      });

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
            <button type="submit" className="btn btn-dark">Agregar Todo</button>

        </form>
    )
}
export default Formulario;