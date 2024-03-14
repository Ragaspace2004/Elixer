import React, { useState } from 'react';
//import usePost from '../hooks/usePost'; // Import the usePost hook
import { Link } from 'react-router-dom';

type Internships ={
  internship_id :string;
  company_id :string;
  internship_title :string;
  skills_requires :string;
  roles :string;
  pay_status :string;
  registration_link :string;
  last_date :string;
  created_at :string;
  updated_at :string;
};
export default function AddInternships() {


  const [job, setJob] = useState<Internships>();

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data submitted");
    fetch('https://test3.ragapriya-k2022cse.workers.dev/internships-add/sql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    }).then(response => response.json())
      .finally(() => console.log('Internship added'));};

      // const handleClick = (event: MouseEvent<HTMLUListElement>) => {
      // const target = event.target as HTMLLIElement;
      // const company_id= target.dataset.itemId;
      // console.log();
      // };

    return (
      <div id="top-card" className="w-full  bg-cyan-200 rounded-xl p-8 ">
        <Link to="/dashboard1">
          <button className="flex justify-start font-semibold mt-3 rounded-2xl px-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><p className="mt-1 text-2xl">Back</p></button>
          </Link> 
        <div className="bg-white p-5 rounded-xl flex flex-col gap-5">
          <h1 className='text-3xl font-bold flex justify-center'>Internships </h1>    
          <form onSubmit={onSubmitData} className="flex flex-col gap-5 p-6">
            <div className="flex flex-row gap-3">
            
            <input
              type='text'
              name='internship_id'
              placeholder='Enter Internship ID'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.internship_id}
              onChange={(data) => {
                setJob({
                  ...job!,
                  internship_id: String(data.target.value),
                })
              }}
            />
            <button className="bg-cyan-200 px-3 py-1 rounded-xl " >CHECK</button>
            </div>
    
            <input
              type='text'
              name='Company Name'
              placeholder='Enter Company Name'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
               value={job?.company_id}
              onChange={(data) => {
                setJob({
                  ...job!,
                  company_id: (data.target.value),
                })
              }}
            />
    
            <input
              type='text'
              name='internship_title'
              placeholder='Internship Title'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.internship_title}
              onChange={(data) => {
                setJob({
                  ...job!,
                  internship_title: data.target.value,
                })
              }}
            />
    
             <input
              type='text'
              name='skills_requires'
              placeholder='Expected skill-set'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.skills_requires}
              onChange={(data) => {
                setJob({
                  ...job!,
                  skills_requires: data.target.value,
                })
              }}
            />      
      <input
              type='text'
              name='roles'
              placeholder='Roles '
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.roles}
              onChange={(data) => {
                setJob({
                  ...job!,
                  roles: data.target.value,
                })
              }}
            />
            
          <div className='flex flex-row gap-6'>
          <input
              type='text'
              name='pay_status'
              placeholder='Pay Status'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.pay_status}
              onChange={(data) => {
                setJob({
                  ...job!,
                  pay_status: data.target.value,
                })
              }}
            />
            <input
              type='text'
              name='regstration_link'
              placeholder='Registration Link'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3"
              value={job?.registration_link}
              onChange={(data) => {
                setJob({
                  ...job!,
                  registration_link: data.target.value,
                })
              }}
            />    
           <input
              type='datetime-local'
              name='Last date'
              placeholder='Recruitment ends?'
              className="border-2 border-gray-300 w-full rounded-xl px-5 py-3 mt-5"
              value={job?.last_date}
              onChange={(data) => {
                setJob({
                  ...job!,
                  last_date: data.target.value,
                })
              }}
            /> 
            </div>
            <button type='submit'className='text-xl  px-2 py-1 bg-cyan-200 hover:bg-[#34d399] rounded-full' >Add Company</button>
         </form>
      
          </div>
        </div>
    ) }