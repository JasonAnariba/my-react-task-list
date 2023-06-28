import React, { useState,useEffect } from "react";
import Header from "./Components/Header";
import ListaNotas from "./Components/ListaTareas";



function App() {
  const storedList = localStorage.getItem("tareas");
  const listainicial = storedList ? JSON.parse(storedList) : [];

  const [lista, setLista] = useState(listainicial);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(lista));
  }, [lista]);

 

  const agregarNota = () => {
    if (newNote.trim() !== "") {
      setLista([...lista, { texto: newNote, completada: true }]);
      //este es para reiniciar el input
      setNewNote("");
    }
  };

  const marcarTarea = (index) => {
    const newList = [...lista];
    newList[index].completada = !newList[index].completada;
    setLista(newList);
  };

  const eliminarTarea = (index) => {
    const newList = [...lista];
    newList.splice(index, 1);
    setLista(newList);
  };

  return (
    <div className="App">
      <Header />
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="¿Tienes tareas para hoy?"
        style={{ fontSize: '20px' }}
      />
      <button onClick=  {agregarNota}>Agregar tarea</button>
      <ListaNotas
        list={lista}
        marcarTarea={marcarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
