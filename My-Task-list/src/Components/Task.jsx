import { Button, Flex } from "@chakra-ui/react";
export const Nota = (props) => {
    const { note, estadoTarea, eliminarTarea, editarTarea} = props;
  
    if (!note || !note.texto) {
      return null; 
    }

    function revisiondetarea() {
      
      return note.completada ? 'pendiente' : 'completada';
    }
    
    const estado = revisiondetarea();
    return (
      <ul>
      <li>
      
       <span>
        <strong>{note.texto}</strong>
        </span>
       <div>{note.descripcion && <p>{note.descripcion}</p>}</div>
       
       <Button
          size="sm"
          colorScheme={note.completada ? "green" : "blue"}
          onClick={estadoTarea}
          mr={2}
        >
          {estado}
        </Button>
        <Button size="sm" colorScheme="red" onClick={eliminarTarea} mr={2}>
          Eliminar
        </Button>
        <Button size="sm" colorScheme="teal" onClick={editarTarea}>
          Editar Tarea
        </Button>
        
        
    </li>
    </ul>
    );
    
  };
  
  export default Nota;