import './App.css';
import logo from './logo1.svg'

function App() {
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
              <input className='outline-0 border-0 tex-lg   rounded-md p-4' type='password' placeholder='Enter your password' />
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
