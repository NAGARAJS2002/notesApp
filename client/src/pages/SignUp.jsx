import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
export default function SignUp() {

  const[formData,setFormData] = useState({});
  const [loading ,setLoading] = useState(false);
  const[error , setError] = useState(null);
  const Navigate = useNavigate()
 
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  }
       
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          setLoading(false);
          setError(data.message);
       
          return;
        }
        setLoading(false);
        setError(null);
         Navigate('/sign-in')
      } catch (error) {
        setLoading(false);
       setError(error.message);
    }
    
       
    
   
    
  }
  return (
    <div className='mt-16 max-w-md  mx-auto p-3 '>
         <h1 className='text-center font-bold  text-blue-700 text-3xl pb-3'>Signup</h1>
         <form onSubmit={handleSubmit} className='flex flex-col gap-3  '>
          <input type="text"
          id='username'
          placeholder='username'
          className='border p-3 outline-none focus:border-blue-700  rounded-lg'
          onChange={handleChange}
          />

          <input type="email" 
          id='email'
          placeholder='email'
           className='border p-3 outline-none focus:border-blue-700 rounded-lg'
           onChange={handleChange}
          />

          <input type="password" 
          id='password'
          placeholder='password'
           className='border p-3 outline-none focus:border-blue-700 rounded-lg'
           onChange={handleChange}
          />
     <button disabled={loading} className='border bg-blue-700 text-white rounded-lg  
     p-3 uppercase hover:opacity-90 disabled:opacity-85'>{loading ? 'loading...': 'signup'}</button>
         </form>
         <div className='p-2'>
          <Link to={'/sign-in'}>
          <p className='text-slate-500'>have an account<span className='text-blue-700'> signin</span></p>
          </Link>
         </div>
          {error && <p className='text-red-700'>{error}</p>}
    </div>
  )
}
