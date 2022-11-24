import { createContext, useState, useEffect } from "react";
import { tasks as data, TTask } from "../data/tasks";

type TCreateTask = {
  title: string;
  description: string;
};

interface ITaskContext {
  tasks: TTask[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  inputSearch: string;
  setInputSearch: (value: string) => void;
  createTask: (task: TCreateTask) => void;
  deleteTask: (taskId: number) => void;
}

export const TaskContext = createContext<ITaskContext>({
  tasks: data,
  isOpen: false,
  setIsOpen: () => {},
  inputSearch: "",
  setInputSearch: () => {},
  createTask: () => {},
  deleteTask: () => {},
});

export function TaskContextProvider({ children }: { children: any }) {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  function createTask(task: TCreateTask) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((task: TTask) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isOpen,
        setIsOpen,
        inputSearch,
        setInputSearch,
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
