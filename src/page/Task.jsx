import React, { useState } from "react";
import bg from "../assets/bg.svg";
import TaskHeader from "../components/TaskHeader.jsx";
import TaskCard from "../components/TaskCard.jsx";
import Footer from "../components/Footer.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const time = new Date().toLocaleTimeString("en-Us", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const addTask = (taskName) => {
    if (taskName.trim() === "") return;
    const newTask = {
      id: Date.now(),
      time: time,
      taskName: taskName,
      isDone: false,
    };
    axios
      .post("https://taskmanager-backend-56z2.onrender.com", { taskName, isDone: false })
      .then((res) => {
        setTasks([res.data.task, ...tasks]);
        toast.success("Task Added Successfully!");
      })
      .catch((err) => console.error("Add task failed", err));
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`https://taskmanager-backend-56z2.onrender.com/${taskId}`)
      .then((res) => {
        const filteredTask = tasks.filter((task) => task._id !== taskId);
        setTasks(filteredTask);
        toast.error("Task Deleted!");
      })
      .catch((err) => {
        console.error("Task deletion failed", err);
        toast.error("Task deletion failed!");
      });
  };

  const updateTask = (taskId, updatedFields) => {
    axios
      .put(`https://taskmanager-backend-56z2.onrender.com/${taskId}`, updatedFields)
      .then((res) => {
        const updatedTask = res.data.task;
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === updatedTask._id ? { ...task, ...updatedFields } : task
          )
        );
        toast.success("Task Updated!");
      })
      .catch((err) => {
        console.error("Update task failed", err);
        toast.error("Update failed!");
      });
  };

  useEffect(() => {
    axios
      .get("https://taskmanager-backend-56z2.onrender.com")
      .then((res) => setTasks(res.data.task))
      .catch((err) => console.error("Fetch Failed", err));
  }, []);

  return (
    <div className="relative w-full">
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />
      <div className="font-montserrat relative z-10 flex flex-col items-center min-h-screen">
        <div className="">
          <TaskHeader onAddTask={addTask} />
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              id={task._id}
              time={new Date(task.createdAt).toLocaleTimeString()}
              taskName={task.taskName}
              isDone={task.isDone}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
            />
          ))}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Task;
