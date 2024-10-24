import {useState } from "react"
import {useSelector,useDispatch} from "react-redux";

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart

} from '../redux/user/userSlice';

export default function Profile() {
  const {currentUser,loading,error} = useSelector(state => state.user);

const [formData,setFormData] = useState({});
const [updateSuccess, setUpdateSuccess] = useState(false);

const dispatch = useDispatch();




 

 function handleChange(e) {
  setFormData(
    {
      ...formData,
      [e.target.id]:e.target.value,
    }
  )
 }

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    dispatch(updateUserStart());
    const res = await fetch(`/api/user/update/${currentUser._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(updateUserFailure(data.message));
      return;
    }

    dispatch(updateUserSuccess(data));
    setUpdateSuccess(true);
  } catch (error) {
    dispatch(updateUserFailure(error.message));
  }
};


const handleUserDelete = async () => {
      try {
        dispatch(deleteUserStart())
        const res = await fetch(`/api/user/delete/${currentUser._id}`,{
          method: 'DELETE',

        });
        const data = await res.json();
        if (data.success===false) {
          dispatch(deleteUserFailure(data.message))
        }

         dispatch(deleteUserSuccess(data));
      } catch (error) {
        dispatch(deleteUserFailure(error.message))
      }
};


const handleSignOut = async () => {
  try {
    dispatch(signOutUserStart());
    const res = await fetch('/api/auth/signout');
    const data = await res.json();
    if (data.success === false) {
      dispatch(deleteUserFailure(data.message));
      return;
    }
    dispatch(deleteUserSuccess(data));
  } catch (error) {
    dispatch(deleteUserFailure(error.message));
  }
};




  return (
    <div className='max-w-lg p-3 mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
     <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
    
      <input type="text"  id="username"
       className='border p-3 rounded-lg'
       defaultValue={currentUser.username}
       onChange={handleChange}
        />
      <input type="email" 
       id="email"
     className='border p-3 rounded-lg' 
     defaultValue={currentUser.email}
     onChange={handleChange}
     />
      <input type="password"
       id="password" 
       onChange={handleChange}
      className='border p-3 rounded-lg' />
      <button className='bg-green-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...': 'update'}</button>
     </form>
     <div className='flex justify-between pt-2'>
      <p className='text-red-700 cursor-pointer' onClick={handleUserDelete}>Delete</p>
      <p className='text-red-700 cursor-pointer' onClick={handleSignOut}>SigOut</p>
     </div>
     <p className='text-red-700 mt-5'>{error ? error : ''}</p>
      <p className='text-green-700 mt-5'>
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>
    </div>
  )
}
