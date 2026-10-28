import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to Complete page
    navigate("/complete");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>

      <label htmlFor="username">Username</label>
      <input type="text" id="username" required />
      <br /><br />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" required />
      <br /><br />

      <label htmlFor="age">Age</label>
      <input type="number" id="age" required />
      <br /><br />

      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" required />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;