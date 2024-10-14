import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {signInFailure,signInStart,signInSuccess} from "../redux/user/userSlice"
import OAuth from '../components/OAuth';
export default function SignIn() {
  const dispatch = useDispatch();
  const {loading ,error} = useSelector(state => state.user)
  const [formData , setformData] = useState({});
  const navigate =  useNavigate()
console.log(formData);

function handleChange(e) {
  setformData(
    {
      ...formData,
      [e.target.id] : e.target.value,
    }
  )
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    dispatch(signInStart())
    const res = await fetch('/api/auth/signin', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    });

    const data = await res.json();


    if (data.success === false) {
     dispatch(signInFailure(data.message))
      return; 
    }

   dispatch(signInSuccess(data))
    navigate('/'); 

  } catch (error) {
    dispatch(signInFailure(data.message))
  }
};


  return (
    <div className='p-3  max-w-md mx-auto'>
      <h1 className='text-3xl text-center text-blue-700 font-bold my-7'>Sign  In</h1>
      <form  onSubmit={handleSubmit}  className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg outline-none focus:border-blue-700'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg outline-none focus:border-blue-700 '
          id='password'
          onChange={handleChange}
        />

        <button
         
          className='bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
      {loading ? 'Loading...': 'SignIn'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
