import { Nota } from "./Task";

export const ListaNotas = (props) => {
  const { list, marcarTarea, eliminarTarea } = props;

  return (
    <ul>
      {list.map((item, index) => (
        <Nota
          key={index}
          note={item}
          estadoTarea={() => marcarTarea(index)}
          eliminarTarea={() => eliminarTarea(index)}
        />
      ))}
    </ul>
  );
};

export default ListaNotas;