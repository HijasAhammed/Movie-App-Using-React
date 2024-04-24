import React from 'react'
import { Link } from 'react-router-dom'
 const signup = () => {
  return(
    <>
    <div className='flex justify-center items-center h-screen w-full login_bg'>
    <div className="bg-white shadow-md roundedpx-8 px-6 pb-8 mb-4 w-full max-w-lg ">
      {/* Increased width by adding 'w-full max-w-lg' */}
      <h1 className="text-center text-xl font-bold mb-9">Signup</h1>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email ID"
        />
      </div>
      <div className="mb-6">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mb-7">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cnfpassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button className=" bg-green-600 hover:bg-red-500 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button">Signup</button>
      </div>
      <br />
      <div className='text-blue-600' ><Link to="/">Don't have an account?Register</Link></div>


    </div>
    </div>
    
  </>
  )
}

export default signup
