import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayname, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayname:displayname, photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //  unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      // navigate("/");  we dont need this line because we are using onAuthStateChanged
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo" />

      {user && (
        <div className='flex p-2'>
          <img className='w-12 h-12' alt='user-icon'
            src={user?.photoURL}
          />
          <button onClick={handleSignout} className='font-bold text-white'> Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header