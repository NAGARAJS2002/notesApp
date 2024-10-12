import React from 'react'

export default function SignUp() {
  return (
    <div>
         <h1>SignUp</h1>
         <form>
          <input type="text"
          id='username'
          placeholder='username'
          className='border p-3 rounded-lg'
          />

          <input type="text" 
          id='email'
          placeholder='email'
           className='border p-3 rounded-lg'
          />

          <input type="text" 
          id='password'
          placeholder='password'
           className='border p-3 rounded-lg'
          />

         </form>
    </div>
  )
}
