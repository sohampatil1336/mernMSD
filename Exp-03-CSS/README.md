# Experiment 3: ReactJS Application with CSS Stylesheet

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To design and implement a **ReactJS application demonstrating different CSS styling techniques**, including:
1. **Inline CSS** (JavaScript style objects)
2. **External CSS Stylesheets** (`App.css`, `index.css`)
3. **CSS Modules** (`College.module.css` for locally scoped class names)

---

## 📑 Theoretical Background

Styling in React can be achieved using several approaches depending on scope, maintainability, and reusability requirements:

### 1. Inline Styling
- Styles are applied directly to JSX elements using the `style` attribute.
- Value must be passed as a JavaScript object with camelCase properties:
  ```jsx
  <div style={{ backgroundColor: "#FFF3CD", color: "#856404", padding: "10px", margin: "10px", border: "2px solid orange" }}>
    <h2>Inline Styled Component</h2>
  </div>
  ```
- **Advantages:** Quick prototyping, dynamically computed styles based on props or state.
- **Disadvantages:** Cannot use pseudo-classes (`:hover`), media queries, or keyframe animations directly; poor separation of concerns.

### 2. External CSS Stylesheet
- Standard CSS written in a separate `.css` file (e.g., `App.css`) and imported into the component file:
  ```javascript
  import "./App.css";
  ```
- Elements reference classes using the `className` attribute:
  ```jsx
  <div className="container">
    <h1 className="heading">External Stylesheet</h1>
  </div>
  ```
- **Advantages:** Familiar syntax, full access to media queries and animations, clean separation of design and logic.
- **Disadvantages:** Global scope — class names can collide across components.

### 3. CSS Modules
- A CSS file where all class and animation names are scoped locally to the component by default.
- File naming convention: `[name].module.css` (e.g., `College.module.css`):
  ```javascript
  import styles from "./College.module.css";
  ```
- Usage:
  ```jsx
  <div className={styles.card}>
    <h2 className={styles.title}>College Information</h2>
  </div>
  ```
- React / Webpack compiles class names into unique hashed identifiers (e.g., `College_card__2a1b9`), eliminating global naming conflicts.

---

## 📁 Project Structure

```
Exp-03-ReactJS-Appln-with-CSS-Stylesheet/
├── public/
│   └── index.html
├── src/
│   ├── App.css               # External CSS Stylesheet
│   ├── App.js                # React components demonstrating Inline, External & Module CSS
│   ├── College.module.css    # CSS Module (locally scoped)
│   ├── index.css             # Global styles
│   └── index.js              # Entry point
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

1. Navigate to this folder:
   ```bash
   cd Exp-03-ReactJS-Appln-with-CSS-Stylesheet
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
