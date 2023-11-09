import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [input, setInput] = useState({ userName: "", password: "", changePassword: "", email: "", number: "" });
  const [showPassword, setshowPassword] = useState(false);
  const nevigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })

  }
  return (
    <div className='bg-light-blue p-4 '>
      <div id='inputForm' className='h-full  '>
        <h1 className='text-center mb-4 text-bright-blue font-bold font-mono text-[40px] tracking-widest drop-shadow-[1px_1px_1px_#8c6fa9]  '>SIGNUP</h1>


        <div id='username' className='bg-white px-4 py-1 mx-4 my-1 flex rounded-[10px] align-middle' >
          <div id="userName" className="p-2 text-2xl"><i class="fa-solid fa-user"></i></div>
          <input type="text" className="w-full text-xl p-2 focus:outline-none bg-transparent" name='userName' value={input.userName} onChange={handleChange} placeholder='Choose UserName ' />
        </div>

        <div id='email' className='bg-white px-4 py-1 mx-4 my-8 flex rounded-[10px] align-middle' >
          <div id="email" className="p-2 text-2xl"><i class="fa-solid fa-envelope"></i></div>
          <input type="email" className="w-full text-xl p-2 focus:outline-none bg-transparent" name='email' value={input.email} onChange={handleChange} placeholder='Email ' />
        </div>

        <div id='mobileNumber' className='bg-white px-4 py-1 mx-4 my-1 flex rounded-[10px] align-middle' >
          <div id="mobileNumber" className="p-2 text-2xl"><i class="fa-solid fa-mobile"></i></div>
          <input type="number" className="w-full text-xl p-2 focus:outline-none bg-transparent" name='number' value={input.number} onChange={handleChange} placeholder='Mobile Number ' />
        </div>

        <div id="password" className='bg-white px-4 py-1 mx-4 mt-10 flex rounded-[10px] align-middle'>
          <div id="password" className="p-2 text-2xl" ><i class="fa-solid fa-lock"></i></div>
          <input type={showPassword ? "text" : "password"} name='password' value={input.password} onChange={handleChange} className="w-full text-xl p-2 focus:outline-none bg-transparent" placeholder='Password' />
          {
            showPassword == false ?
              (<div className="p-2 text-xl" onClick={() => setshowPassword(!showPassword)}><i class="fa-regular fa-eye"></i></div>)
              :
              (<div className="p-2 text-xl" onClick={() => setshowPassword(!showPassword)}><i class="fa-regular fa-eye-slash"></i></div>)
          }
        </div>

        <div id="confirmPassword" className='bg-white px-4 py-1 mx-4 my-8 flex rounded-[10px] align-middle'>
          <div id="password" className="p-2 text-2xl" ><i class="fa-solid fa-lock"></i></div>
          <input type={showPassword ? "text" : "password"} name='changePassword' value={input.changePassword} onChange={handleChange} className="w-full text-xl p-2 focus:outline-none bg-transparent" placeholder='Confirm Password' />
        </div>



        <div className='w-full flex justify-center'>
          <input type="button" value="Login" className='bg-gradient-to-b from-violet-400 to-purple-400 w-[50%] rounded-xl mx-4 p-2 mt-8 text-black text-center text-xl  shadow-inner ' />
        </div>
        <div className='text-center my-3 text-[10px]' >
          Already have an account?<span className='text-blue-700' onClick={() => nevigate("/auth/login")}> Login</span>
        </div>

      </div>
    </div>
  )
}

export default SignUp