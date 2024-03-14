import React from 'react'
import { Link } from 'react-router-dom'

export default function profile() {
  return (
    <div>
      <div>

          <div>
          <Link to="/dashboard">
          <button className="flex justify-start bg-gray-200 hover:bg-cyan-200 shadow-lg font-semibold mt-5 rounded-2xl px-2 ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><p className="mt-1 text-2xl">Back</p></button>
          </Link> 
          </div>


     <div className="flex flex-col justify-center items-center  ">
      <h1 className="text-2xl font-bold text-black"><u>PROFILE</u></h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvDukGO5XOpz0TmhV5LVe9UhyVh1UA-5evg22BM2eOxvbd1CrTfilR2IbqCcne0Pqyl4&usqp=CAU" width="290px" height="400px" />
     </div>

     <div className="bg-cyan-200 py-10 shadow-2xl ml-20 mr-20 ">
     <div className="flex flex-col gap-5  px-16 w-full whitespace-break-spaces">
        <h2 className='text-lg font-bold'>Student Id         : </h2>
        <h2 className='text-lg font-bold'>Username          : </h2>
        <h2 className='text-lg font-bold '>Email                  : </h2>
        <h2 className='text-lg font-bold '>Phone Number  : </h2>
         <h2 className='text-lg font-bold '>Interest               : </h2>
      </div>
    </div>
    </div>
    </div>
  )
}