# Experiment 5: Customizing Themes using ReactJS

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To design and implement **theme customization in ReactJS using Material UI (MUI)** with `createTheme` and `ThemeProvider`, modifying color palettes, typography, spacing, and component defaults across the application.

---

## 📑 Theoretical Background

### What is Theming in React/MUI?
Theming provides a centralized way to define the visual language of an entire application. Instead of hardcoding colors, font sizes, and borders inside individual components, theme variables (design tokens) are injected globally.

### Key Theming Concepts:

1. **`createTheme(options)`:**
   - Generates a customized theme object by merging your custom configurations with MUI's default theme specifications.
   - Allows configuration of:
     - **Palette:** `primary`, `secondary`, `error`, `warning`, `info`, `success`, `background`, and `text`.
     - **Typography:** Font families, weights, heading sizes (`h1` through `h6`), body text sizes.
     - **Spacing:** Base spacing unit (default is 8px).
     - **Components:** Global component overrides and default props.

2. **`ThemeProvider`:**
   - A React context provider component that passes the theme down the component tree.
   - Any child component can access theme values via the `sx` prop or `useTheme()` hook:
   ```jsx
   <ThemeProvider theme={theme}>
     <App />
   </ThemeProvider>
   ```

3. **Demonstrated Custom Theme:**
   ```javascript
   const theme = createTheme({
     palette: {
       primary: {
         main: "#556cd6",
       },
       secondary: {
         main: "#19857b",
       },
     },
     typography: {
       h2: {
         fontSize: 36,
       },
     },
   });
   ```

---

## 📁 Project Structure

```
Exp-05-Customizing-Themes-using-ReactJS/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js                # App layout
│   ├── MyButton.js           # Themed Button
│   ├── MyTextField.js        # Themed TextField
│   ├── MyCheckbox.js         # Themed Checkbox
│   ├── MyCard.js             # Themed Card
│   ├── index.js              # ThemeProvider & createTheme setup
│   └── index.css
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

1. Navigate to this folder:
   ```bash
   cd Exp-05-Customizing-Themes-using-ReactJS
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
