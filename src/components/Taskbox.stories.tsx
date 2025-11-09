import Taskbox from "./Taskbox";

export default {
  title: "Components/Taskbox",
  component: Taskbox,
  parameters: {
    layout: "padded",
  },
};

export const Default = () => (
  <Taskbox 
    title="Write comprehensive documentation" 
    state="TASK_INBOX"
    onPinTask={() => console.log("Pinned")}
    onArchiveTask={() => console.log("Archived")}
  />
);

export const Pinned = () => (
  <Taskbox 
    title="Fix critical authentication bug" 
    state="TASK_PINNED"
    onPinTask={() => console.log("Unpinned")}
    onArchiveTask={() => console.log("Archived")}
  />
);

export const Archived = () => (
  <Taskbox 
    title="Refactor legacy codebase" 
    state="TASK_ARCHIVED"
  />
);

export const LongTitle = () => (
  <Taskbox
    title="Implement comprehensive end-to-end testing suite with full coverage including unit tests, integration tests, and accessibility tests"
    state="TASK_INBOX"
    onPinTask={() => console.log("Pinned")}
    onArchiveTask={() => console.log("Archived")}
  />
);

export const MultipleTasksInbox = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
    <Taskbox title="Review pull requests" state="TASK_INBOX" />
    <Taskbox title="Update dependencies" state="TASK_INBOX" />
    <Taskbox title="Write unit tests" state="TASK_INBOX" />
  </div>
);

export const MultipleTasksPinned = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
    <Taskbox title="Deploy to production" state="TASK_PINNED" />
    <Taskbox title="Fix critical bug" state="TASK_PINNED" />
    <Taskbox title="Security audit" state="TASK_PINNED" />
  </div>
);

export const MixedStates = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
    <Taskbox title="High priority feature" state="TASK_PINNED" />
    <Taskbox title="Regular task" state="TASK_INBOX" />
    <Taskbox title="Completed feature" state="TASK_ARCHIVED" />
    <Taskbox title="Another regular task" state="TASK_INBOX" />
    <Taskbox title="Old completed task" state="TASK_ARCHIVED" />
  </div>
);