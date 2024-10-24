import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
export default function Dashboard() {
 const {currentUser} = useSelector(state => state.user);
 const [notesClick , setNotesClick ]= useState(false)

  return (
<>
    
{
   currentUser ?   <div className='pt-4 mx-6'>
    <div className='flex justify-between'>
      <h1 className='text-4xl font-bold' ><span className='text-blue-700 p-3'>Hey,</span>{currentUser.username}</h1>
      <button onClick={() =>setNotesClick(!notesClick)} className='border flex items-center px-5 text-center  bg-blue-700 rounded-full  text-white'><IoMdAdd/>Add Notes</button>
    </div>
   {
    notesClick &&  <div className='max-w-lg mx-auto mt-14 bg-white p-5 rounded-md shadow-md '>
    <div className='flex justify-between'>
      <h2 className='text-xl font-semibold'>Notes</h2>
      <button className='text-xl ' onClick={() =>setNotesClick(!notesClick)} ><AiOutlineClose/></button>
    </div>
    <form className='flex flex-col gap-2 pt-2'>
      <input type="text" id='title' placeholder='title'  className='border p-3 rounded-lg outline-none focus:border-blue-700'/>
      <textarea rows={5} type="text" id='description' placeholder='description' className='border p-3 rounded-lg outline-none focus:border-blue-700' />
      <button className='bg-green-200 text-green-900 p-2 rounded-md hover:bg-green-300 font-semibold'>Save</button>
    </form>
  </div>
   }
  </div>: <Navigate to='/sign-in'/>
  }
</>
  )
}
