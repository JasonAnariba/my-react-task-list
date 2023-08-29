import { Box, List, ListItem, Link, Text } from "@chakra-ui/react";
import { Nota } from "./Task";

export const ListaNotas = (props) => {
  const { list, marcarTarea, eliminarTarea, editarTarea } = props;

  return (
    <List styleType="none">
      {list.map((item, index) => (
        <Box
          key={index}
          p={4} 
          mb={4} 
          bg="white" 
          borderRadius="md" 
          boxShadow="md" 
        >
          <Nota
            note={item}
            estadoTarea={() => marcarTarea(index)}
            eliminarTarea={() => eliminarTarea(index)}
            editarTarea={() => editarTarea(index)}
          />
        </Box>
      ))}
    </List>
  );
};

export default ListaNotas;