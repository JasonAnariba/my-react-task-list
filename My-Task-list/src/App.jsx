import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ChakraProvider,CSSReset,extendTheme,Button,Box,Container,Heading,Text,Input,Textarea,VStack,List } from "@chakra-ui/react";
import Header from "./Components/Header";
import ListaNotas from "./Components/ListaTareas";
import Home from "./Components/Home";
import SobreNosotros from "./Components/SobreNosotros";
import Menu from "./Components/Menu";

const theme = extendTheme({
  
});

function useTareasIniciales() {
  const storedList = localStorage.getItem("tareas");
  return storedList ? JSON.parse(storedList) : [];
}

function useTareas() {
  const [lista, setLista] = useState(useTareasIniciales);
  const [newNote, setNewNote] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editNote, setEditNote] = useState(-1);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(lista));
  }, [lista]);

  const agregarTarea = () => {
    if (newNote.trim().length >= 3) {
      const newTask = {
        texto: newNote,
        descripcion: newDescription,
        completada: false,
      };
      if (editNote === -1) {
        setLista([...lista, newTask]);
      } else {
        const newList = [...lista];
        newList[editNote] = newTask;
        setLista(newList);
        setEditNote(-1);
      }
      setNewNote("");
      setNewDescription("");
      setErrorMessage("");
    }else{
      setErrorMessage("La tarea debe tener al menos 3 caracteres");
      window.alert("La tarea debe tener al menos 3 caracteres");   
    }
    
    setErrorMessage("")
  };

  const marcarTarea = (index) => {
    const newList = [...lista];
    newList[index].completada = !newList[index].completada;
    setLista(newList);
  };

  const editarTarea = (index) => {
    setEditNote(index);
    setNewNote(lista[index].texto);
    setNewDescription(lista[index].descripcion); 
  };

  const eliminarTarea = (index) => {
    const newList = [...lista];
    newList.splice(index, 1);
    setLista(newList);
  };

  return {
    lista,
    newNote,
    setNewNote,
    agregarTarea,
    newDescription,
    setNewDescription,
    marcarTarea,
    editarTarea,
    eliminarTarea,
  };
}

export function App() {
  const {
    lista,
    newNote,
    setNewNote,
    agregarTarea,
    newDescription,
    setNewDescription,
    marcarTarea,
    editarTarea,
    eliminarTarea,
  } = useTareas();

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Container maxW="container.lg" mt={"20"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/App" element={
              <VStack spacing={4}>
              <form onSubmit={handleSubmit}>
              <Input
  type="text"
  value={newNote}
  onChange={(e) => setNewNote(e.target.value)}
  placeholder="Nombre de la tarea (mínimo 3 caracteres)"
  size="lg" // Controla el tamaño del input
  fontSize="xl" // Controla el tamaño de la fuente
  border="2px" // Controla el grosor del borde
  borderColor="blue.500" // Controla el color del borde
  borderRadius="md" // Controla la curvatura de los bordes
  px={3} // Agrega espaciado horizontal interno
  py={2} // Agrega espaciado vertical interno
  _placeholder={{ color: "gray.500" }} // Estilos del placeholder
  _focus={{ borderColor: "blue.500", boxShadow: "outline" }} // Estilos al enfocar
/>
                <Textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Descripcion de tarea (opcional)"
                  size="lg" // Controla el tamaño del input
  fontSize="xl" // Controla el tamaño de la fuente
  border="2px" // Controla el grosor del borde
  borderColor="blue.500" // Controla el color del borde
  borderRadius="md" // Controla la curvatura de los bordes
  px={3} // Agrega espaciado horizontal interno
  py={2} // Agrega espaciado vertical interno
  _placeholder={{ color: "gray.500" }} // Estilos del placeholder
  _focus={{ borderColor: "blue.500", boxShadow: "outline" }} // Estilos al enfocar
/>
                <Button type="submit" colorScheme="blue" >Agregar tarea</Button>
              </form>
              <List w="100%">
              <ListaNotas
                list={lista}
                marcarTarea={marcarTarea}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
              />
              </List>
            </VStack>
           }/>
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}
 
function Root() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  );
}

export default Root;




