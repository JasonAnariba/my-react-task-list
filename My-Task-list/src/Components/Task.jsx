export const Nota = (props) => {
    const { note, estadoTarea, eliminarTarea } = props;
  
    function revisiondetarea() {
      return note.completada ? 'pendiente' : 'completada';
    }
    const estado = revisiondetarea();
    return (
      <ul>
      <li>
       <span><strong>{note.texto}</strong></span>
      <button onClick={estadoTarea}>{estado}</button>
      <button onClick={eliminarTarea}>Eliminar</button>
    </li>
    </ul>
    );
    
  };
  
  export default Nota;