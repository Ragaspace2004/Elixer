import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

type Internships = {
  internship_id: string;
  company_id: string;
  internship_title: string;
  skills_requires: string;
  roles: string;
  pay_status: string;
  registration_link: string;
  last_date: string;
  created_at: string;
  updated_at: string;
};

export default function Internship() {
  const { data: internships, loading, error } = useFetch({
    url: 'https://test3.ragapriya-k2022cse.workers.dev/internships/sql/get-all',
  });

  return (
    <div className="flex w-full">
    <div className="bg-cyan-200">
    <Link to="/dashboard">
          <button className="flex justify-start font-semibold rounded-2xl px-2 "><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><p className="mt-1 text-2xl">Back</p></button>
          </Link> 
   
       
      <div id="top-card" className=" bg-cyan-200 rounded-xl p-8">
        <div className="bg-white p-5 rounded-xl flex flex-col gap-5">
          <h1 className="text-3xl font-sans font-bold ">Internships</h1>
          {loading && <p>Loading companies...</p>}
          {error && <p>Error: {error}</p>}
          {internships && internships.length > 0 && (
            <div className="flex flex-col xl:columns-5 gap-3 w-full rounded-xl bg-white">
              {internships.map((internship: Internships) => (
                <div
                  id="card-container"
                  className="flex flex-row items-center  gap-5 rounded-lg border-gray-200 bg-white p-4 shadow-xl"
                  key={internship.company_id}
                >
                  <div className="grid grid-cols-4 gap-y-1 gap-x-36   ">
                    <div className="flex flex-col gap-2 ">
                      <div className="text-xm font-bold font-mono col-span-2 ">{internship.internship_id}</div>

                      <div className=" text-xs font-mono col-span-2 ">Jobs : {internship.internship_title}</div>
                      <div className=" text-xs font-mono col-span-2">Starts : {internship.roles}</div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <div className="text-xm font-bold font-mono col-span-2">{internship.company_id}</div>

                      <div className="text-xs font-mono col-span-2">Skills :{internship.skills_requires}</div>
                      <div className="text-xs font-mono col-span-2 font-bold">Ends : {internship.last_date}</div>
                    </div>
                  </div>
                  <button className="hover:bg-red-500 px-3 py2 rounded-3xl sm:flex justify-end items-end">
                    <Link to={internship.registration_link}>REGISTER</Link>
                    </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
