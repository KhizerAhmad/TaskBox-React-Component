import React from "react";
import "./Taskbox.css";

export type TaskState = "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";

type TaskProps = {
  title: string;
  state: TaskState;
  onPinTask?: () => void;
  onArchiveTask?: () => void;
};

const Taskbox: React.FC<TaskProps> = ({ title, state, onPinTask, onArchiveTask }) => {
  return (
    <div className={`taskbox ${state.toLowerCase()}`}>
      <p className="taskbox-title">{title}</p>
      <div className="taskbox-actions">
        {state !== "TASK_ARCHIVED" ? (
          <>
            <button className="pin-btn" onClick={onPinTask}>
              {state === "TASK_PINNED" ? "📌 Unpin" : "📌 Pin"}
            </button>
            <button className="archive-btn" onClick={onArchiveTask}>
              🗂️ Archive
            </button>
          </>
        ) : (
          <span className="archived-label">✅ Archived</span>
        )}
      </div>
    </div>
  );
};

export default Taskbox;