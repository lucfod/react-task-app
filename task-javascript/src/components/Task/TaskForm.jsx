import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

import { RiCloseLine } from "react-icons/ri";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { setIsOpen, createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
      <div className="px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl">
        <header className="flex">
          <div className="flex items-center justify-left w-full">
            <h1 className="mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              Crear Tarea
            </h1>
          </div>
          <div className="flex items-center justify-right">
            <button
              className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
              aria-label="close"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
          </div>
        </header>
        <div className="text-sm text-gray-700 dark:text-gray-400">
          <form onSubmit={handleSubmit} className="p-4">
            <input
              placeholder="Escribe tu tarea"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="bg-slate-300 p-3 w-full mb-2"
              autoFocus
              required
            />
            <textarea
              placeholder="Escribe la descripcion de la tarea"
              onChange={(e) => setDescription(e.target.value)}
              className="bg-slate-300 p-3 w-full mb-2"
              value={description}
              required
            ></textarea>
            <button className="cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
