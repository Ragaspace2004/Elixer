import React, { useState } from 'react';
//import usePost from '../hooks/usePost'; // Import the usePost hook
import { Link } from 'react-router-dom';

type Jobs={
  company_id:string;
  company_name:string;
  roles:string;
  skills_required :string;
  start_date :string,
  end_date:string,
  completed_status :boolean,
  created_at:string,
  updated_at:string
}

export default function AddCompanies() {


  const [job, setJob] = useState<Jobs>();

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data submitted");
    fetch('https://test3.ragapriya-k2022cse.workers.dev/jobs-add/sql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    }).then(response => response.json())
      .finally(() => console.log('Company added'));};

      // const handleClick = (event: MouseEvent<HTMLUListElement>) => {
      //   const target = event.target as HTMLLIElement;
      //   const company_id= target.dataset.itemId;
      //   console.log();
      // };

    return (
      <div id="top-card" className="w-full bg-cyan-200 rounded-xl p-8 ">
         <Link to="/dashboard1">
          <button className="flex justify-start font-semibold mt-3 rounded-2xl px-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><p className="mt-1 text-2xl">Back</p></button>
          </Link> 
        <div className="bg-white p-5 rounded-xl flex flex-col gap-5">
          <h1 className='text-3xl font-bold flex justify-center'>Admin Board</h1>

          {/* <div>{JSON.stringify(job)}</div> */}
    
          <form onSubmit={onSubmitData} className="flex flex-col gap-5 p-6">
            
            <input
              type='text'
              name='company_id'
              placeholder='Enter Company-ID'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.company_id}
              onChange={(data) => {
                setJob({
                  ...job!,
                  company_id:data.target.value,
                })
              }}
            />
          
    
            <input
              type='text'
              name='Company Name'
              placeholder='Enter Company Name'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
               value={job?.company_name}
              onChange={(data) => {
                setJob({
                  ...job!,
                  company_name: (data.target.value),
                })
              }}
            />
    
            <input
              type='text'
              name='roles'
              placeholder='Enter the roles'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
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
              name='skills_required'
              placeholder='Expected skill-set'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.skills_required}
              onChange={(data) => {
                setJob({
                  ...job!,
                  skills_required: data.target.value,
                })
              }}
            />

      <div>
            <input
              type='datetime-local'
              name='start_date'
              placeholder='Recruitment starts?'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.start_date}
              onChange={(data) => {
                setJob({
                  ...job!,
                  start_date:data.target.value,
                })
              }}
            />
    
              <input
              type='datetime-local'
              name='end_date'
              placeholder='Recruitment ends?'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3 mt-5"
              value={job?.end_date}
              onChange={(data) => {
                setJob({
                  ...job!,
                  end_date: data.target.value,
                })
              }}
            />
            </div>
    
            <input type='checkbox'
              name='completed_status'
              onChange={(data) => {
                setJob({
                  ...job!,
                  completed_status: data.target.checked,
                })
              }}/>
            
            <button type='submit'className='text-xl  px-2 py-1 bg-cyan-200 hover:bg-[#34d399] rounded-full' >Add Company</button>
           
          </form>
      
          </div>
        </div>
    )
    
            }