import { useState } from "react";
import Taskbox, { type TaskState } from "./components/Taskbox";
import "./components/App.css";

function App() {
  const [taskState, setTaskState] = useState<TaskState>("TASK_INBOX");

  const handlePin = () => {
    setTaskState((prev) =>
      prev === "TASK_PINNED" ? "TASK_INBOX" : "TASK_PINNED"
    );
  };

  const handleArchive = () => {
    setTaskState("TASK_ARCHIVED");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Taskbox Demo</h1>
        <p className="app-subtitle">A modern task management component</p>
      </header>

      <main className="app-main">
        <div className="task-container">
          <Taskbox
            title="Complete the project"
            state={taskState}
            onPinTask={handlePin}
            onArchiveTask={handleArchive}
          />
        </div>

        <div className="state-indicator">
          <span className="state-label">Current state:</span>
          <span className={`state-badge ${taskState.toLowerCase()}`}>
            {taskState.replace("TASK_", "")}
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;