import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Complete from "./Complete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
}

export default App;