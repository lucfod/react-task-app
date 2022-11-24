import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks, inputSearch } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks
        .filter((t) => {
          if (inputSearch === "") {
            return t;
          } else if (
            t.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
            t.description.toLowerCase().includes(inputSearch.toLowerCase())
          ) {
            return t;
          }
        })
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}

export default TaskList;
