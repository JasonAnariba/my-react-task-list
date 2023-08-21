import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import ListaNotas from "./Components/ListaTareas";

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
    setNewDescription(lista[index].descripcion); // Asegúrate de pasar la descripción
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

function App() {
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
      <Header />
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Nombre de la tarea (mínimo 3 caracteres)"
          style={{ fontSize: "20px" }}
        />
        <textarea
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Descripcion de tarea (opcional)"
        style={{fontSize: "20px"}}
        />
        <button type="submit">Agregar tarea</button>
      </form>
      <ListaNotas
        list={lista}
        marcarTarea={marcarTarea}
        editarTarea={editarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
