import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/Task/TaskList";
import TaskForm from "../components/Task/TaskForm";

function Home() {
  const { isOpen, setIsOpen } = useContext(TaskContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-6 my-6">
          <TaskList />

          {isOpen && <TaskForm setIsOpen={setIsOpen} />}
        </div>
      </div>
    </>
  );
}

export default Home;
