# Experiment 2: ReactJS Class & Function Component

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To design, implement, and compare **Class Components** and **Functional Components** in ReactJS, demonstrating props, state management, lifecycle methods, and modern React Hooks (`useState`, `useEffect`).

---

## 📑 Theoretical Background

In React, components are the building blocks of user interfaces. There are two primary ways of creating components:

### 1. Class Components (Traditional React)
- Defined as ES6 classes extending `React.Component`.
- Must implement a `render()` method that returns JSX.
- State is managed via `this.state` and updated using `this.setState()`.
- Lifecycle management relies on methods like:
  - `componentDidMount()`: Invoked immediately after component is inserted into DOM.
  - `componentDidUpdate(prevProps, prevState)`: Invoked after updating occurs.
  - `componentWillUnmount()`: Invoked immediately before component is unmounted/destroyed.
- Requires binding of event handler methods or use of arrow functions.

### 2. Functional Components (Modern React)
- Plain JavaScript functions that accept `props` as an argument and return JSX.
- Introduced React Hooks (React 16.8+) which allow functions to use state and lifecycle features:
  - `useState`: Manages local component state without classes.
  - `useEffect`: Manages side effects (timers, subscriptions, API calls) replacing `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Much cleaner, shorter syntax, with no `this` keyword complexity.

---

## ⚖️ Class vs Functional Components Comparison

| Feature | Class Component | Functional Component |
| :--- | :--- | :--- |
| **Syntax** | ES6 Class extending `React.Component` | Regular JavaScript function |
| **Render Method** | Requires `render()` method | Directly returns JSX |
| **State Management** | `this.state` and `this.setState()` | `useState()` Hook |
| **Lifecycle** | `componentDidMount`, etc. | `useEffect()` Hook |
| **`this` Keyword** | Yes (requires careful binding) | No `this` keyword |
| **Code Verbosity** | Verbose with boilerplate | Clean, concise, readable |
| **Performance** | Slightly heavier | Faster execution and bundle size |

---

## 🚀 How to Run Locally

1. Navigate to this directory:
   ```bash
   cd Exp-02-ReactJS-Class-and-Function-Component
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.
