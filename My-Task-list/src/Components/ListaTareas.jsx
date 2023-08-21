import { Nota } from "./Task";

export const ListaNotas = (props) => {
  const { list, marcarTarea, eliminarTarea,editarTarea } = props;

  return (
    <ul>
      {list.map((item, index) => (
        <Nota
          key={index}
          note={item}
          estadoTarea={() => marcarTarea(index)}
          eliminarTarea={() => eliminarTarea(index)}
          editarTarea= {() => editarTarea(index)}
        />
      ))}
    </ul>
  );
};

export default ListaNotas;