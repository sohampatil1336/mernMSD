# Experiment 7: NodeJS Events, Event Loop & its Role

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To study and implement the **Node.js Events module (`EventEmitter`)** and demonstrate the internal mechanics, phases, and execution priority of the **Node.js Event Loop** (`libuv`).

---

## 📑 Theoretical Background

### 1. Node.js Event-Driven Architecture
Node.js uses an event-driven architecture where certain objects (called "emitters") emit named events that cause `Function` objects ("listeners") to be called.
- Core module: `events`
- Main class: `EventEmitter`
- Key Methods:
  - `.on(eventName, listener)`: Registers a persistent event listener.
  - `.once(eventName, listener)`: Registers a one-time listener that automatically removes itself after first invocation.
  - `.emit(eventName, [...args])`: Synchronously calls each listener registered for the event in the order they were registered.
  - `.off(eventName, listener)` / `.removeListener()`: Removes a specified listener.
  - Special `error` event: Unhandled error events will throw an exception and crash the Node process unless an `error` listener is attached.

### 2. Node.js Event Loop & its Role
Node.js runs JavaScript on a single thread. The **Event Loop** (powered by the C library `libuv`) allows Node.js to perform non-blocking I/O operations by offloading tasks to the operating system or internal thread pools whenever possible.

#### Phases of the Event Loop:
```
   ┌───────────────────────────┐
┌─>│           timers          │  -> Executes callbacks from setTimeout() and setInterval()
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │  -> Executes I/O callbacks deferred to the next loop iteration
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │  -> Used internally only
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           poll            │  -> Retrieves new I/O events; executes I/O related callbacks
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           check           │  -> setImmediate() callbacks are invoked here
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │  -> socket.on('close', ...)
   └───────────────────────────┘
```

#### Microtasks vs Macrotasks:
Between every phase of the event loop, Node.js flushes the **Microtask Queue**:
1. **`process.nextTick()` queue**: Has the highest priority. Executes immediately after current operation completes before the event loop continues.
2. **Promise microtask queue**: Executes `Promise.then()`, `catch()`, `finally()` callbacks.
3. **Macrotask queues**: Timers (`setTimeout`), Check (`setImmediate`), and Poll (`I/O`).

---

## 🚀 How to Run Locally

### 1. Run Events Demonstration:
```bash
cd Exp-07-NodeJS-Events-Event-Loop-and-its-Role
node events-demo.js
```

### 2. Run Event Loop Phases Demonstration:
```bash
cd Exp-07-NodeJS-Events-Event-Loop-and-its-Role
node event-loop-demo.js
```

### Expected Output for `event-loop-demo.js`:
```
1. [SYNCHRONOUS] Call Stack - Task 1
2. [SYNCHRONOUS] Call Stack - Task 2 (End of top-level code)
3. [MICROTASK: process.nextTick] Highest priority microtask executed.
4. [MICROTASK: Promise.then] Microtask executed after process.nextTick.
5. [MACROTASK: Timers Phase] setTimeout(0ms) callback executed.
6. [MACROTASK: Check Phase] setImmediate() callback executed.
7. [I/O PHASE: Poll / I/O Callbacks] File stat I/O callback executed.
   -> [Nested in I/O] setImmediate executed before nested setTimeout!
   -> [Nested in I/O] setTimeout callback.
```
