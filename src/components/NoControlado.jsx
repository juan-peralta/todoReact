import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {

    const form = useRef(null)
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")
        console.log(form.current)
      
        const data = new FormData(form.current);
      

        const {title, description, state} = Object.fromEntries([...data.entries()])
        console.log(title, description, state)

        //validar los datos
        if(!title.trim() || !description.trim() || !state.trim()) return setError("llena todos los campos")
            
              
            
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="title" defaultValue="todo1" />
          <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description" defaultValue="descripcion01"></textarea>
          <select  className="form-select mb-2" name="state" >
            <option value="pendiente">Pendiente</option>
            <option value="terminado">Terminado</option>
          </select>
          <button type="submit" className="btn btn-primary">Procesar</button>
          {
            error !== '' &&  error 
          }
        </form>
    )
}
export default NoControlado;