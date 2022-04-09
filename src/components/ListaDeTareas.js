import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../css/ListaDeTareas.css";
import Tarea from "./Tarea";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    //console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizadas = [tarea, ...tareas];
      setTareas(tareaActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }

      return tarea;
    });

    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            key={tarea.id}
            id={tarea.id}
          />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
