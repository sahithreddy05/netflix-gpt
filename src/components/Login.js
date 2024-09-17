import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        // Sign In or Sign Up
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: 'https://occ-0-1001-1722.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZ2z43VE0jS_qN36DHgArVH-Qa4NwE5AwIZ09Faod0oGh07vVF0NKbJ2UhaMe-gma9HnYPC4OH1wzfLLrC2cKBpDBf4dpPI.png?r=c9f'
                    }).then(() => {
                        const { uid, email, displayname, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayname: displayname, photoURL: photoURL }));
                        // Profile updated!
                        navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                    console.log(user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage);
                });

        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage);
                });
        }


    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="logo"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="First Name"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <p
                    className='text-red-500 font-bold text-lg py-2'
                >
                    {errorMessage}
                </p>

                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p
                    className='py-4 cursor-pointer'
                    onClick={toggleSignInForm}
                >
                    {isSignInForm ? "New to Netflix?Sign Up Now" : "Already a user? Sign In"}
                </p>
            </form>
        </div>
    )
}

export default Login