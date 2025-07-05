import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaPlus, FaRedo } from "react-icons/fa";

const TaskCard = ({
  id,
  time,
  taskName,
  onDeleteTask,
  isDone,
  onUpdateTask,
}) => {
  const [taskDone, setTaskDone] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [editedTask, setEditedTask] = useState(taskName);

  const handleDone = () => {
    setTaskDone(!taskDone);
  };
  const handleEdit = () => {
    setEditTask(!editTask);
  };
  const handleSaveEdit = () => {
    setEditTask(false);
    onUpdateTask(id, { taskName: editedTask });
  };
  return (
    <div className="bg-white/10 flex justify-between items-center mb-4 backdrop-blur-md border border-white/30 rounded-lg shadow-2xl w-[100%] p-4 pb-2">
      <div className="text-white w-[60%]">
        <div className="flex gap-1">
          {editTask ? (
            <>
              <input
                type="text"
                className="text-black py-0"
                name=""
                onChange={(e) => setEditedTask(e.target.value)}
                value={editedTask}
                id=""
              />
            </>
          ) : (
            <div
              id="taskTitle"
              style={{
                textDecoration: `${taskDone ? "line-through" : "none"}`,
              }}
            >
              {editedTask}
            </div>
          )}

          <span>
            {editTask ? (
              <>
                <button
                  className="bg-[#147762] text-white p-1 px-3 hover:bg-[#116553] h-full"
                  onClick={handleSaveEdit}
                >
                  <FaPlus />
                </button>
              </>
            ) : (
              <></>
            )}
          </span>
        </div>

        <div className="text-[12px] text-[#ffffffc2]">{time}</div>
      </div>
      <div className="flex gap-4 text-[#147762] text-xl w-[40%] justify-end ">
        <button className="hover:text-[#116553]" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button className="hover:text-[#116553]" onClick={handleDone}>
          {taskDone ? <FaRedo /> : <FaCheck />}
        </button>
        <button className="hover:text-red-700" onClick={() => onDeleteTask(id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
