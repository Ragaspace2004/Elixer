import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import usePost from '../hooks/usePost'; // Import the usePost hook

type StudentEnrolled ={
  enrollment_id :number;
  student_id :string;
  internship_id :string;
  roles :string;
  duration :string;
  created_at:string;
  updated_at :string;
};

export default function AddCompanies() {


  const [job, setJob] = useState<StudentEnrolled>();

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data submitted");
    fetch('https://test3.ragapriya-k2022cse.workers.dev/students-enroll-add/sql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    }).then(response => response.json())
      .finally(() => console.log('Enrollment done'));};

      // const handleClick = (event: MouseEvent<HTMLUListElement>) => {
      //   const target = event.target as HTMLLIElement;
      //   const company_id= target.dataset.itemId;
      //   console.log();
      // };

    return (
      <div id="top-card" className="w-full  bg-cyan-200 rounded-xl p-8 ">
        
       
        
        <div>  
        <Link to="/dashboard">
          <button className="flex justify-start font-semibold mt-3 rounded-2xl px-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><p className="mt-1 text-2xl">Back</p></button>
          </Link> 
          </div>

          <div className="bg-white p-4 rounded-xl flex flex-col items-center">
          <h1 className='text-3xl font-bold'>Student Enrollment Form</h1>
          
          {/* <div>{JSON.stringify(job)}</div> */}

          <div><img src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5852d86faea_ABM%20College%20internship%20blog%202.jpg" className='lg-5'/></div>
    
          <form onSubmit={onSubmitData} className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5 ">
            
            <input
              type='text'
              name='enrollment_id'
              placeholder='Enter Enrollment Id'
              className="border-2 border-gray-300 w-full rounded-xl px-20 py-3 "
              value={job?.enrollment_id}
              onChange={(data) => {
                setJob({
                  ...job!,
                  enrollment_id: Number(data.target.value),
                })
              }}
            />
           
    
            <input
              type='text'
              name='Student Id'
              placeholder='Enter the Student Id'
              className="border-2 border-gray-300 w-full rounded-xl px-20 py-3"
               value={job?.student_id}
              onChange={(data) => {
                setJob({
                  ...job!,
                  student_id: (data.target.value),
                })
              }}
            />
    
            <input
              type='text'
              name='Internship Id'
              placeholder='Enter the Internship Id'
              className="border-2 border-gray-300 w-full rounded-xl px-20 py-3"
              value={job?.internship_id}
              onChange={(data) => {
                setJob({
                  ...job!,
                  internship_id: data.target.value,
                })
              }}
            />
    
             <input
              type='text'
              name='Role'
              placeholder='What is your role?'
              className="border-2 border-gray-300 w-full rounded-xl px-20 py-3"
              value={job?.roles}
              onChange={(data) => {
                setJob({
                  ...job!,
                  roles: data.target.value,
                })
              }}
            />

          <input
              type='text'
              name='Duration'
              placeholder='Duration'
              className="border-2 border-gray-300 w-full rounded-xl px-20 py-3"
              value={job?.duration}
              onChange={(data) => {
                setJob({
                  ...job!,
                  duration: data.target.value,
                })
              }}
            />        
            <button type='submit'className='text-xl  px-2 py-1 bg-cyan-200 hover:bg-[#34d399] rounded-full font-bold' >SUBMIT</button>
            </div>
          </form>
      
          </div>
        </div>
    )
    
            }