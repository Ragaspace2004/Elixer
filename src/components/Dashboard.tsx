import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

function Dashboard() {
  return (
    <SideBar>
      <div className=" mt-10 ">
        <div className="flex flex-col items-center ">
          <div className="flex flex-col text-center ">
            <span className="font-semibold text-4xl app-title">Check out your interview and internships opportunities</span>
            <span className="app-color-black font-semibold text-xl mt-20">GET NOTIFIED AT THE EARLIEST!</span>
          </div>

          <div className="bg-white/50 w-10/12 px-6 pb-16 app-shadow rounded-xl mt-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              <div className="bg-white/80 flex flex-col border-2 border-white shadow-xl rounded-xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
               
                <Link to="/ongoing-companylist">
                  <img className="rounded-xl " src="https://t4.ftcdn.net/jpg/04/40/72/95/240_F_440729597_wgkvf083iasDrNpnGRQH67FxgQrD5k5H.jpg" alt="Placements" />
                  <h1 className="font-semibold xs:text-xs app-color-black text-center">Placements</h1>
                </Link>
              </div>

              <div className="bg-white/80 mx-6 flex flex-col rounded-lg border-2 border-white shadow-xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                <Link to="/internship">
                  <img className="rounded-xl" src="https://media.istockphoto.com/id/1210822092/vector/internship-concept-icon-part-time-job-for-undergraduates-idea-thin-line-illustration.jpg?s=612x612&w=0&k=20&c=DYl3ajClJwycV8HWJAkoIieqhvbM_W4w25okSNIKumU=" alt="Internships" />
                  <h1 className="font-semibold text-lg app-color-pink text-center xs:text-xs text-wrap">Internships</h1>
                </Link>
              </div>

              <div className="bg-white/80 mx-6 flex flex-col border-2 border-white shadow-xl rounded-xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                <Link to="/recruiters">
                  <img className="rounded-xl py-3" src="https://www.pngitem.com/pimgs/m/357-3577526_business-png-transparent-images-customer-relationship-png-png.png" width="1000px" height="900px" alt="Recruiters" />
                  <h1 className="font-semibold text-lg app-color-black text-center">Recruiters</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
}

export default Dashboard;



 