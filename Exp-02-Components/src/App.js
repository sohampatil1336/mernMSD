import React, { useState, useEffect } from "react";
import "./App.css";

// ============================================================================
// PART 1: CLASS COMPONENTS
// ============================================================================

// 1. Simple Class Component
class HelloWorld extends React.Component {
  render() {
    return (
      <div className="card class-card">
        <h3>1. Class Component: Hello World</h3>
        <p className="highlight">Hello World from Class Component!</p>
      </div>
    );
  }
}

// 2. Class Component with Props
class Student extends React.Component {
  render() {
    return (
      <div className="card class-card">
        <h3>2. Class Component: Student Details</h3>
        <p><strong>Name:</strong> {this.props.name || "Anuj Arun Powar"}</p>
        <p><strong>Roll No:</strong> {this.props.rollNo || "13"}</p>
        <p><strong>Branch:</strong> Computer Science & Engineering</p>
        <p><strong>College:</strong> D. Y. Patil College of Engineering & Technology, Kolhapur</p>
      </div>
    );
  }
}

// 3. Class Component with Lifecycle (componentDidMount & componentWillUnmount)
class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="card class-card">
        <h3>3. Class Component: Live Clock (Lifecycle)</h3>
        <p>Current Date & Time: <code>{this.state.date.toLocaleString()}</code></p>
      </div>
    );
  }
}

// 4. Class Component with State & Event Handling
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="card class-card">
        <h3>4. Class Component: State Counter</h3>
        <p className="count-display">Count: <span>{this.state.count}</span></p>
        <div className="btn-group">
          <button className="btn btn-green" onClick={this.increment}>Increment (+)</button>
          <button className="btn btn-red" onClick={this.decrement}>Decrement (-)</button>
          <button className="btn btn-gray" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

// ============================================================================
// PART 2: FUNCTIONAL COMPONENTS (Modern React with Hooks)
// ============================================================================

// 1. Simple Function Component with Props
function Welcome(props) {
  return (
    <div className="card function-card">
      <h3>1. Function Component: Welcome</h3>
      <p className="highlight">Welcome to React, {props.name || "Student"}!</p>
      <p>Functional components are JavaScript functions that return JSX.</p>
    </div>
  );
}

// 2. Function Component with useState Hook
function FunctionalCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card function-card">
      <h3>2. Function Component: Counter with useState</h3>
      <p className="count-display">Count: <span>{count}</span></p>
      <div className="btn-group">
        <button className="btn btn-green" onClick={() => setCount(count + 1)}>Increment (+)</button>
        <button className="btn btn-red" onClick={() => setCount(count - 1)}>Decrement (-)</button>
        <button className="btn btn-gray" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

// 3. Function Component with useEffect Hook
function FunctionalTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card function-card">
      <h3>3. Function Component: Timer with useEffect</h3>
      <p>App running for: <code>{seconds} seconds</code></p>
    </div>
  );
}

// 4. Interactive Profile Function Component
function StudentProfile({ name, rollNo, subject }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card function-card">
      <h3>4. Function Component: Interactive Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <div style={{ marginTop: "10px" }}>
        <button className="btn btn-blue" onClick={() => setLikes(likes + 1)}>
          👍 Kudos ({likes})
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Experiment 2: ReactJS Class & Function Component</h1>
        <p className="subtitle">
          MERN Stack Development (MSD) | Practical Demonstration of React Components
        </p>
      </header>

      <div className="columns">
        {/* Class Components Column */}
        <div className="column">
          <div className="column-header class-header">
            <h2>Class Components</h2>
            <p>ES6 Classes extending <code>React.Component</code></p>
          </div>
          <HelloWorld />
          <Student name="Anuj Arun Powar" rollNo="13" />
          <DateTime />
          <Counter />
        </div>

        {/* Functional Components Column */}
        <div className="column">
          <div className="column-header function-header">
            <h2>Functional Components</h2>
            <p>JavaScript Functions with React Hooks</p>
          </div>
          <Welcome name="Anuj Arun Powar" />
          <StudentProfile name="Anuj Arun Powar" rollNo="13" subject="MERN Stack Development" />
          <FunctionalTimer />
          <FunctionalCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
