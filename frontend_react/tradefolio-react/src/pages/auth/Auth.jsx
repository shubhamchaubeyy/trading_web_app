import React from 'react'
import "./Auth.css"
import SignupForm from './SignupForm'
import { Button } from '@/components/ui/button'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import ForgetPasswordForm from './ForgetPasswordForm'
import SigninForm from './SigninForm'
const Auth = () => {

    const navigate =useNavigate()
    const location = useLocation()
  return (
    <div className=' h-screen  relative authContainer text-white'>
      <div className=' absolute top-0 right-0 left-0 bottom-0 bg-[#030712]
      bg-opacity-50'>
        <div className=' bg-blure absolute top-1/2 left-1/2 transform
         -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center
          h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white'>

            <h1 className=' text-3xl font-bold pb-9'> Trade Folio</h1>

            {location.pathname=="/signup"  ? 
            <section className='w-[80%]'>
                <SignupForm/>
                <div className=' flex items-center justify-center mt-4 gap-2'>
                    <span>already have account ?</span>
                    <Button onClick={()=>navigate("/signin")} variant="ghost">
                        Sign In
                    </Button>
                </div>
            </section>: location.pathname=="/forgot-password" ?
            <section className='w-[80%]'>
                <ForgetPasswordForm/>
                <div className=' flex items-center justify-center gap-2 mt-4'>
                    <span>back to login ?</span>
                    <Button onClick={()=>navigate("/signin")} variant="ghost">
                        Sign In
                    </Button>
                </div>
            </section>: <section>
                <SigninForm/>
                <div className=' flex items-center justify-center mt-4 gap-2'>
                    <span>don't have account ?</span>
                    <Button onClick={()=>navigate("/signup")} variant="ghost">
                        Sign Up
                    </Button>
                </div>
                <div className=' mt-2 '>
                    <Button onClick={()=>navigate("/forgot-password")} variant="link" 
                        className=" text-white w-full">
                        Forgot Password?
                    </Button>
                </div>
            </section>
            }
        </div>
      </div>
    </div>
  )
}

export default Auth
