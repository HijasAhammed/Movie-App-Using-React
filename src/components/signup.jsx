import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ user, setUsers }) => {
  const navigate = useNavigate();
  const [input, setInputs] = useState({
    Emailid: '',
    password: '',
    cnfpassword: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputs({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!input.Emailid || !input.password || !input.cnfpassword) {
      setError('All Fields Required');
    } else if (!emailRegex.test(input.Emailid)) {
      setError('Invalid Email Format');
    } else if (!passwordRegex.test(input.password)) {
      setError('Password Format Is Invalid');
    } else if (input.password !== input.cnfpassword) {
      setError('Password and confirm password are not equal');
    } else {
      setUsers((prevUsers) => [...prevUsers, input]);
      setError(null);
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full login_bg">
      <div className="bg-white shadow-md rounded px-8 py-6 mb-4 w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-xl font-bold mb-9">Signup</h1>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Emailid"
              type="text"
              placeholder="Email ID"
              value={input.Emailid}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-7">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cnfpassword"
              type="password"
              placeholder="Confirm Password"
              value={input.cnfpassword}
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-green-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >Signup
            </button>
          </div>
          <br />
          <div className="text-blue-600">
            <Link to="/">Don't have an account? Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;