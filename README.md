# TaskBox — React Component with Storybook 📋

A reusable React task component built with TypeScript. Handles three task states — inbox, pinned, and archived — with smooth animations and full Storybook documentation for isolated component development.

---

## What it does

- Displays a task with three possible states: **Inbox**, **Pinned**, and **Archived**
- Pin important tasks to bring them to the top
- Archive tasks when they're done
- Each state has its own styling and animation
- All states are documented and viewable in Storybook

---

## Why I built this

Wanted to properly understand component-driven development — building UI in isolation, documenting states with Storybook, and getting TypeScript props typed correctly. Most tutorials skip Storybook but it's something you actually use in professional teams, so this was good practice.

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| React 18 | Component structure and state |
| TypeScript | Typed props and state definitions |
| Storybook | Component documentation and isolated development |
| Vite | Build tool and dev server |
| CSS | Component styling and animations |
| Vitest | Testing setup |

---

## How to run it locally

```bash
git clone https://github.com/KhizerAhmad/TaskBox-React-Component.git
cd TaskBox
npm install
```

**Run the dev app:**
```bash
npm run dev
```

**Open Storybook:**
```bash
npm run storybook
```

---

## Using the Component

```tsx
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
```

---

## Task States

| State | Description |
|-------|-------------|
| `TASK_INBOX` | Default — task is pending |
| `TASK_PINNED` | Task is pinned as important |
| `TASK_ARCHIVED` | Task is completed and archived |

Each state has distinct styling and a smooth CSS transition between them.

---

## Project Structure

```
TaskBox/
│
├── .storybook/               # Storybook config
├── src/
│   ├── components/
│   │   ├── Taskbox.tsx       # Main component
│   │   ├── Taskbox.css       # Component styles
│   │   └── Taskbox.stories.tsx  # Storybook stories
│   ├── App.tsx               # Demo app
│   └── index.css
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run storybook    # Launch Storybook
npm run test         # Run tests with Vitest
npm run lint         # Run ESLint
```

---

## Screenshot / Storybook Preview

<img width="1903" height="941" alt="image" src="https://github.com/user-attachments/assets/93b09fa0-bc0d-4ad1-90f6-69013f44388d" />


---

## Author

**Khizer Ahmad** — built this to get comfortable with component-driven development, TypeScript prop typing, and Storybook documentation in a focused, practical project.

Feel free to use this as a base for your own component library.
