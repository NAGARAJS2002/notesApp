import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className=' shadow-md bg-white'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       <Link to={'/'}> <h1 className='text-2xl text-blue-700 font-bold'>Notes</h1></Link>
        <form
         
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4 cursor-pointer'>
        <Link to={'/'}>  <li className='hidden  text-blue-700 sm:inline hover:underline'>dashboard</li></Link>
         <Link to={'/sign-in'} > <li  className=' text-blue-700 hover:underline'>signIn</li></Link>
        </ul>
      </div>
    </header>
  )
}
