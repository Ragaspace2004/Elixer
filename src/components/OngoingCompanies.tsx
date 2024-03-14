import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

type Jobs = {
  company_id: string;
  company_name: string;
  roles: string;
  skills_required: string;
  start_date: string;
  end_date: string;
  completed_status: boolean;
  created_at: string;
  updated_at: string;
};

export default function CompanyList() {
  const { data: jobs, loading, error } = useFetch({
    url: 'https://test3.ragapriya-k2022cse.workers.dev/jobs-ongoing/sql/get-all',
  });

  return (
    <div>
      <div id="top-card" className="w-full bg-cyan-200 rounded-xl p-8">
        <div>
       <nav className='flex flex-row items-center justify-between font-bold text-xl'>
        <ul>
          <Link to ="/ongoing-companylist">Ongoing Placements</Link>
        </ul>
        <ul>
          <Link to ="/upcoming-companylist">Upcoming Placements</Link>
        </ul>
        <ul>
          <Link to ="/companylist">Companies Visited</Link>
        </ul>
      </nav></div>
        <div className="bg-white p-5 rounded-xl flex flex-col gap-5">
          <h1 className="text-3xl font-sans font-bold flex justify-center ">Ongoing</h1>
          {loading && <p>Loading companies...</p>}
          {error && <p>Error: {error}</p>}
          {jobs && jobs.length > 0 && (
            <div className="flex flex-col xl:columns-5 gap-3 w-full rounded-xl bg-white">               
              {jobs.map((job: Jobs) => (
                <div
                id="card-container"
                className="flex w-full flex-row items-center justify-between rounded-lg border-gray-200 bg-white p-4 shadow-xl"
                key={job.company_id}
              ><div className='grid grid-cols-4 gap-y-1 gap-x-36 grid-flow-dense'>
              <div className="text-xm font-bold font-mono col-span-2 ">{job.company_id}</div >
              <div className=" text-xm font-bold font-mono col-span-2">{job.company_name}</div >
              <div className=" text-xs font-mono col-span-2 ">Jobs :  {job.roles}</div >
              <div className=" text-xs font-mono col-span-2">Skills :{job.skills_required}</div >  
              <div className=" text-xs font-mono col-span-2">Starts : {job.start_date}</div >         
              <div className=" text-xs font-mono col-span-2 ">Ends : {job.end_date}</div ></div>     
                </div>
              ))}
            </div>
            
          )}
        </div>
      </div>
      </div>
  );
}
