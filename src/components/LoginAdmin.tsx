import { Link } from 'react-router-dom'


interface LoginAdmin{
  userid:string,
  password:string,
  image:string
}

export default function LoginAdmin() {
  return (
   <div className="order-1 p-5">

<div className=" ml-6  ">
<Link to="/">
          <button className="flex justify-start bg-gray-200 hover:bg-cyan-200 shadow-lg font-semibold mt-3 rounded-2xl px-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><p className="mt-1 text-2xl">Back</p></button>
          </Link> 
          </div>
    
    
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 lg:py-32">

        <div className="order-1">
          <div className="flex justify-center ">
            <img className="md:w-48 lg:w-96 " src="https://images.onlineaushadhi.com/img/alogin.png" alt="Admin Login Image" />
          </div>
        </div>

        <div className="order-2 flex flex-col justify-center font-semibold text-black px-9 mt-10 sm:mt-0">
          <h1 className="text-3xl font-bold">Hello, Welcome Back!</h1>
          <h1>Login with your credentials.</h1>

          <div className="flex flex-col gap-7 py-9">
            <div className="flex flex-col">
              <p className="text-xl font-medium">User Id</p>
              <input type="text" placeholder="Enter your User Id" className="border border-black rounded-lg bg-gray-200 px-4 py-3 text-black" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-medium">Password</p>
              <input type="password" placeholder="Enter your Password" className="border border-black rounded-lg bg-gray-200 px-4 py-3  text-black" />
            </div>
          </div>
          <Link to='/dashboard1'>
          <button className="rounded-lg py-2 px-4 bg-cyan-400 text-white w-full">LOGIN</button></Link>
        </div>
      </div>
</div>
  )
}