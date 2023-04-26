import { useState } from 'react';
import logo from './logo1.svg'
import { HiEyeOff } from "react-icons/hi";

function App() {
  const [passwordType, setPasswordType] = useState('password');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setPasswordType('password');
    } else {
      setPasswordType('text');
    }
  }



  return (
    <div className="App">
      <div className='flex bg-amber-400 overflow-hidden'>
        <div className='bg-teal-800 rotate-6 scale-150 w-4/12'>
          <img src={logo} alt='image' className='h-screen ml-8 invert opacity-80 fill-white' />
        </div>

        <div className='bg-amber-400 h-screen w-8/12 flex flex-col justify-center items-center'>
          <div className='bg-stone-100 w-[28rem] drop-shadow-2xl ml-24 rounded-lg'>
            <div className='flex items-center justify-between px-4 py-6 bg-stone-100 rounded drop-shadow-xl mb-4'>
              <h1 className='text-lg text-amber-500'>ALREADY MEMBER</h1>
              <p className='text-md text-slate-950/80'> Need help?</p>
            </div>


            <form className='flex flex-col p-4'>
              <input className='outline-0 border-0 text-lg  rounded-md p-4 mb-4' type='text' placeholder='Enter your Name' />
              <input className='outline-0 border-0 text-lg rounded-md p-4' type={passwordType} placeholder='Enter your password' />
              <HiEyeOff className='absolute right-8 bottom-32 text-2xl text-slate-950/40 bg-stone-100 ' onClick={handleShowPassword} />

              <button className='bg-teal-800 text-xl text-white rounded-md p-4 mt-8'>Login</button>
            </form>
          </div>
          <div>

          </div>
          <div className='flex flex-col justify-center items-center ml-24 mt-8'>
            <p className='text-white text-md font-medium'>Don't have an account yet?</p>
            <button className='text-teal-800 text-md'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
