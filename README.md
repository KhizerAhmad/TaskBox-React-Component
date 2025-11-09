Taskbox Component
A React task component I built to practice TypeScript and component-driven development. It handles three states: inbox, pinned, and archived.
What it does
The component lets you:

Pin important tasks
Archive completed tasks
Toggle between states with smooth animations

I added Storybook to document all the different states and make it easier to develop in isolation.

**Tech Stack:**
React 18
TypeScript
Vite
Storybook

**Clone and install:**
bashgit clone https://github.com/Khizer002/TaskBox-React-Component.git
cd TaskBox-React-Component
npm install

**Run the dev server:**
bashnpm run dev

**Check out Storybook:**
bashnpm run storybook

**Using the Component:**
import Taskbox from './components/Taskbox';

function App() {
  const [state, setState] = useState('TASK_INBOX');

  return (
    <Taskbox
      title="Fix the login bug"
      state={state}
      onPinTask={() => setState('TASK_PINNED')}
      onArchiveTask={() => setState('TASK_ARCHIVED')}
    />
  );
}
States
The component has three states:

TASK_INBOX - default state
TASK_PINNED - for important tasks
TASK_ARCHIVED - for completed tasks

Each state has its own styling with different colors and animations.
What I Learned
This project helped me understand:

How to structure reusable React components
TypeScript type definitions for props
Setting up Storybook for component documentation
CSS animations and transitions
Managing component state

**Project Structure:**
src/
├── components/
│   ├── Taskbox.tsx          # Main component
│   ├── Taskbox.css          # Component styles
│   └── Taskbox.stories.tsx  # Storybook stories
├── App.tsx                  # Demo app
├── App.css
└── index.css
