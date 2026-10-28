import React from "react";
import "./App.css";
import styles from "./College.module.css";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">Hello World</h1>
      </div>
    );
  }
}

class Student extends React.Component {
  render() {
    return (
      <div className="student">
        <h2>Student Details</h2>
        <p>Name: Shubham Pattewar</p>
        <p>Branch: Computer Science</p>
        <p>College: DYP CET</p>
      </div>
    );
  }
}

class DateTime extends React.Component {
  render() {
    return (
      <div className="student">
        <h2>Current Date and Time</h2>
        <p>{new Date().toLocaleString()}</p>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="student">
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

// Inline Styling
function Hello() {
  return (
    <div
      style={{
        backgroundColor: "#FFF3CD",
        color: "#856404",
        padding: "10px",
        margin: "10px",
        border: "2px solid orange",
      }}
    >
      <h2>This is a Function Component</h2>
    </div>
  );
}

// Inline Styling
function Welcome() {
  return (
    <div
      style={{
        backgroundColor: "#D4EDDA",
        color: "#155724",
        padding: "10px",
        margin: "10px",
        border: "2px solid green",
      }}
    >
      <h2>Welcome to React</h2>
      <p>React is a JavaScript Library.</p>
    </div>
  );
}

// CSS Module
function College() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>College Information</h2>
      <p>College: D. Y. Patil College of Engineering & Technology</p>
      <p>Location: Kolhapur</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <HelloWorld />
      <Student />
      <DateTime />
      <Counter />
      <Hello />
      <Welcome />
      <College />
    </div>
  );
}

export default App;