import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import flower from "../assets/flower.png";
const TaskHeader = ({ onAddTask }) => {
  const [inputTask, setInputTask] = useState("");

  const handleAdd = () => {
    onAddTask(inputTask);
    setInputTask("");
  };

  return (
    <div className="bg-[#ffffff38] shadow-2xl border-b-4 border-b-[#147762] p-4 mb-8 mt-8 text-center w-full sm:w-[80%] md:w-[100%] sm:flex-col m-auto">
      <div className="flex justify-center gap-1 items-center mb-10 ">
        <h1 className="text-2xl text-white font-light">
          Collaborative Task Board
        </h1>
        <span>
          <img src={flower} width={35} alt="" />
        </span>
      </div>
      <div className="flex gap-1 flex-col items-center md:flex-row sm:flex-row justify-center">
        <input
          onChange={(e) => setInputTask(e.target.value)}
          value={inputTask}
          placeholder="add task"
          type="text"
          name="task"
        />
        <button
          onClick={handleAdd}
          className="bg-[#147762] text-white p-1 px-3 hover:bg-[#116553]"
          type="submit"
        >
          <FaPlus />
        </button>
        <input
          placeholder="search task"
          className="ml-2"
          type="search"
          name="search"
          id=""
        />
      </div>
    </div>
  );
};

export default TaskHeader;
