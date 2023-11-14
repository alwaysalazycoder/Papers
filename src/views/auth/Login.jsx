import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {



  const [input, setInput] = useState({ userName: "", password: "" });
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState({ userName: false, password: false })
  const [strength, setStrength] = useState(false);

  const nevigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
    setError({ ...error, [name]: false })
  }
  const handleForm = (userName, password) => {
    if (userName === '') {
      setError({ ...error, userName: true })
    }
    else if (password === '') {
      setError({ ...error, password: true })
    }
    else if (password.length < 6) {
      setStrength(true)
    }

  }
  return (
    <div className='bg-light-blue p-4  '>
      <div id='inputForm' className='h-full  '>

        <h1 className='text-center mb-4 text-bright-blue font-bold font-mono text-[40px] tracking-widest drop-shadow-[1px_1px_1px_#8c6fa9] '>LOGIN</h1>

      {error.userName == true && (<div className='text-red-500 text-[10px]  px-4 py-1 mx-4 my-1'>*UserName is Empty</div>)}
      {error.password == true && (<div className='text-red-500 text-[10px] px-4 py-1 mx-4 my-1 '>*password is Empty</div>)}
      {strength && (<div className='text-red-500 text-[10px] px-4 py-1 mx-4 my-1 '>*password should be more than 6 letters </div>)}



        <div id='username' className='bg-white px-4 py-1 mx-4 my-1 flex rounded-[10px] align-middle ' >
          <div id="icon1" className="p-2 text-2xl cursor-pointer"><i className="fa-solid fa-user"></i></div>
          <input type="text" className="w-full text-xl p-2  focus:outline-none bg-transparent" name='userName' value={input.userName} onChange={handleChange} placeholder='UserName or Email' />
        </div>

        <div id="password" className='bg-white px-4 py-1 mx-4 mt-10 flex rounded-[10px] align-middle'>
          <div id="icon2" className="p-2 text-2xl cursor-pointer" ><i className="fa-solid fa-lock"></i></div>
          <input type={showPassword ? "text" : "password"} name='password' value={input.password} onChange={handleChange} className="w-full text-xl p-2 focus:outline-none bg-transparent" placeholder='Password' />
          {
            showPassword == false ?
              (<div className="p-2 text-xl cursor-pointer" onClick={() => setshowPassword(!showPassword)}><i className="fa-regular fa-eye"></i></div>)
              :
              (<div className="p-2 text-xl cursor-pointer" onClick={() => setshowPassword(!showPassword)}><i className="fa-regular fa-eye-slash"></i></div>)
          }
        </div>



        <div className='w-full flex justify-center'>
          <input type="button" value="Login" className='bg-gradient-to-b from-violet-400 to-purple-400 w-[50%] rounded-xl mx-4 p-2 mt-8 text-black text-center text-xl  shadow-inner  cursor-pointer' onClick={() => handleForm(input.userName, input.password)} />
        </div>

        <div className='text-center my-3 text-[10px]' >
          Don't have account?<span className='text-blue-700 cursor-pointer' onClick={() => nevigate("/auth/sign-up")}> SignUp</span>
        </div>

        <h2 className=' border-b-[1px] border-black text-center leading-[1px] my-4'><span className='bg-light-blue px-2'>or</span></h2>

        <div className="px-6 sm:px-0 w-[100%] mt-12 mx-auto">
          <button type="button" className="text-white w-full  bg-[#377ff3] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2 cursor-pointer"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
        </div>
      </div>
      <div className='text-center mt-3 text-[10px]' >
        Are you Admin?<span className='text-blue-700 cursor-pointer' onClick={() => nevigate("/auth/login-admin")}> Admin Login</span>
      </div>

    </div>
  )
}

export default Login