import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const fullname = useRef(null)

    const handleButtonClick = () => {
        // console.log(email.current.value)
        const message = checkValidData(email.current.value, password.current.value, fullname.current.value)
        setErrorMessage(message)
        console.log(message)
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute p-12 text-white bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input
                    ref={fullname} type="text" placeholder='Full Name' className='p-2 my-4 w-full  bg-gray-200 text-black' />}
                <input
                    ref={email} type="text" placeholder='Email Address' className=' text-black p-2 my-4 w-full bg-gray-200' />
                <input
                    ref={password} type="password" placeholder='Password' className=' text-black p-2 my-4 w-full  bg-gray-200' />
                <p
                    className='text-red-500 font-bold'>
                    {errorMessage}
                </p>
                <button
                    className='p-3 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p
                    className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign Up Now" : "Alreday registered Sign In Now"} </p>
            </form>

        </div >
    )
}

export default Login




// Testing193!