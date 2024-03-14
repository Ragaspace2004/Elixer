import React, { useState } from "react";
import{Link} from 'react-router-dom'
interface SideBarProps {
  children: React.ReactNode;
}

export const SideBar1: React.FC<SideBarProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "home" ,link:'/dashboard'},
    { title: "logout", src: "logout",link:'/' },
    { title: "Notify", src: "notify",link:'/notify' }
  ];

  return (
    <div className="flex">
      <div className={`${open ? "w-96 border-2 bg-cyan-200" : "w-20 border-2 bg-cyan-200  "} h-screen p-5  pt-8 relative duration-300`}>
        <img src="src\assets\control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
        <img
            src=""
            className={` size-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
           <Link to ={Menu.link}> <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer text-black text-sm items-center gap-x-4 
              ${Menu ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-gray-300"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} alt={Menu.title} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li></Link>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-5">
      </div>
    

   <div className="col-span-4 mt-16 mx-9">{children}</div>
   </div>

  );
};

export default SideBar1;
