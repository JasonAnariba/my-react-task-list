export const Nota = (props) => {
    const { note, estadoTarea, eliminarTarea, editarTarea} = props;
  
    if (!note || !note.texto) {
      return null; // O muestra un mensaje de error, o simplemente no renderiza nada
    }

    function revisiondetarea() {
      
      return note.completada ? 'pendiente' : 'completada';
    }
    
    const estado = revisiondetarea();
    return (
      <ul>
      <li>
       <span><strong>{note.texto}</strong></span>
       {note.descripcion && <p>{note.descripcion}</p>}
      <button onClick={estadoTarea}>{estado}</button>
      <button onClick={eliminarTarea}>Eliminar</button>
      <button onClick={editarTarea}>Editar Tarea</button>
    </li>
    </ul>
    );
    
  };
  
  export default Nota;