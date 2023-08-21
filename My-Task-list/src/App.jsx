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
  const [editNote, setEditNote] = useState(null);


useEffect(() => {
  localStorage.setItem("tareas", JSON.stringify(lista));
}, [lista]);

const agregarTarea = () => {
  if (newNote.trim() !== "") {
    if(editNote ===null){
    setLista([...lista, { texto: newNote, completada: true }]);
  } else {
    const newList = [...lista];
    newList[editNote].texto = newNote
    setLista(newList);
    setEditNote(null);
  }      
    setNewNote("");
  }
};

const marcarTarea = (index) => {
  const newList = [...lista];
  newList[index].completada = !newList[index].completada;
  setLista(newList);
};

const editarTarea = (index) => {
  setEditNote(index);
  setNewNote(lista[index].texto);
};


const eliminarTarea = (index) => {
  const newList = [...lista];
  newList.splice(index, 1);
  setLista(newList);
};

return { lista, newNote, setNewNote, agregarTarea, marcarTarea, editarTarea, eliminarTarea };
};

function App() {
  const {
    lista,
    newNote,
    setNewNote,
    agregarTarea,
    marcarTarea,
    editarTarea,
    eliminarTarea,
  } = useTareas();

  return (
    <div className="App">
      <Header />
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="¿Tienes tareas para hoy?"
        style={{ fontSize: "20px" }}
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
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
