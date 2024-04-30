import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ users }) => {
  const [email, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = users.find(
      (u) => u.Emailid === email || u.email === email && u.password === password
    );

    // Simulating a successful login
    if (!email && !password) {
      setError('All Fields Required');
    } else if (user) {
      console.log('Login successful!');
      navigate('/welcome');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full login_bg">
        <div className="bg-white shadow-md rounded px-8 py-6 mb-4 w-full max-w-lg">
          <h1 className="text-center text-xl font-bold mb-9">Login</h1>
          <div className="mb-4">
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email ID"
            />
          </div>
          <div className="mb-6">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              onClick={onSubmit}
              className="bg-green-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
          <br />
          <div className="text-blue-600">
            <Link to="/signup">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;