import { Link } from 'react-router-dom'

export default function Role() {
  return (

    <div>
      <div className="flex justify-center font-normal py-16  text-3xl bg-cyan-200 shadow-xl ">
  <h1> Please select your Role </h1>
  </div>
  
  <div className="flex flex-row gap-11 justify-center items-center mt-16  ">
  <div className="flex flex-col gap-1 font-normal text-center text-xl border mb-12 px-6 shadow-lg">
  <Link to={`/login-student`}>   
  <img src="https://ccinfo.unc.edu/wp-content/uploads/sites/219/2018/01/female-graduate-student.png" className="transition ease-in-out py-8 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white border-bg-blue-500 duration-300 " width="230px" height="40px"/>
  <p className="mt-1 text-2xl font-medium">Student</p>
  </Link>
  </div>

   <div className="flex flex-col gap-1 font-normal text-center text-xl  border mb-12 shadow-lg">
  <Link to={`/login-admin`}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQf3UAXdjEjutXdJ7uJdKZiS-DmO0B8rrrULo2P3ujIohX_ne"  className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300" width="290px" height="30px"/>
  <p className="mt-1 text-2xl font-medium">Admin</p>
  </Link>
  </div>
</div>
{/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> */}
    </div>
  )
}
