import React, { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/utils';


interface SlotContainerProps {
  children: ReactNode;
}

export const DashboardLayout: FC<SlotContainerProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className="bg-white h-screen w-full grid grid-cols-6 gap-3 relative">
      <aside
        id="desktop-sidebar"
        className={cn(
          'bg-white h-screen hidden m:block sm:flex lg:col-span-2  w-72 flex-col  transition-all duration-300 ease-in-out',
          isMenuOpen ? 'block' : 'hidden'
        )}

      > 
       <div className=" bg-cyan-200 w-screen py-2  ">
       <button  className=" top-3  hover:bg-cyan-200 mt-1 ml-3 "    onClick={() => setMenuOpen(isMenuOpen)}> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg> 
      </button>
      </div>
        <Link to="/dashboard"><div className='flex flex-row gap-3 hover:bg-cyan-200 p-6 border'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</div></Link>
        <Link to="/profile"><div className="flex flex-row gap-3  hover:bg-cyan-200 p-6 border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>Profile</div></Link>
        <Link to="/help"><div className="flex flex-row gap-3  hover:bg-cyan-200 p-6 border"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>Help</div></Link>
        <Link to="/"><div className='flex flex-row gap-3   hover:bg-cyan-200 p-6 border'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>Logout</div></Link>

        <Link to="/student-enrollment"><div className='flex flex-row gap-3   hover:bg-cyan-200 p-6 border'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-type"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12v-1h6v1"/><path d="M11 17h2"/><path d="M12 11v6"/></svg>Student Enrollment Form</div></Link>
       
      </aside>

      <aside
        id="mobile-sidebar"
        className={cn(
          'bg-white h-screen sm:hidden col-span-2 w-auto flex flex-col mt-20 transition-all duration-300 ease-in-out shadow-2xl ',
          isMenuOpen ? 'block' : 'hidden'
        )}
      >
        <Link to="/dashboard"><div className='flex flex-row gap-6 hover:bg-cyan-200 p-5 border  '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</div></Link>
        <Link to="/profile"><div className="flex flex-row gap-6  hover:bg-cyan-200 p-5 border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>Profile</div></Link>
        <Link to="/help"><div className="flex flex-row gap-6  hover:bg-cyan-200 p-5 border"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>Help</div></Link>
        <Link to="/"><div className='flex flex-row gap-6  hover:bg-cyan-200 p-5 border'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>Logout</div></Link>

        <Link to="/student-enrollment"><div className='flex flex-row gap-3   hover:bg-cyan-200 p-6 border'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-type"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12v-1h6v1"/><path d="M11 17h2"/><path d="M12 11v6"/></svg>Student Enrollment Form</div></Link>
       
       
      </aside>

      <button
        className="w-full bg-cyan-200  absolute block sm:hidden top-3  hover:bg-cyan-200  px-3 py-2"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg> 
      </button>
      <div className="col-span-2  mt-16 mx-9">{children}</div>
    </div>
  );
};
