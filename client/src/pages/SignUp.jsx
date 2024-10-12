import React from 'react'
import {Link} from "react-router-dom"
export default function SignUp() {
  return (
    <div className='mt-16 max-w-md  mx-auto p-3 '>
         <h1 className='text-center font-bold  text-blue-700 text-3xl pb-3'>Signup</h1>
         <form className='flex flex-col gap-3  '>
          <input type="text"
          id='username'
          placeholder='username'
          className='border p-3 outline-none focus:border-blue-700  rounded-lg'
          />

          <input type="email" 
          id='email'
          placeholder='email'
           className='border p-3 outline-none focus:border-blue-700 rounded-lg'
          />

          <input type="password" 
          id='password'
          placeholder='password'
           className='border p-3 outline-none focus:border-blue-700 rounded-lg'
          />
     <button className='border bg-blue-700 text-white rounded-lg  p-3 uppercase hover:opacity-90 disabled:opacity-85'>signup</button>
         </form>
         <div className='p-2'>
          <Link to={'/sign-in'}>
          <p className='text-slate-500'>have an account<span className='text-blue-700'> signin</span></p>
          </Link>
         </div>
    </div>
  )
}
