import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddCompanies';

import Dashboard from './components/Dashboard';
import CompanyList from './components/CompanyList';
import UpcomingCompanies from './components/UpcomingCompanies';
import OngoingCompanies from './components/OngoingCompanies';
import Internship from './components/Internship';
import StudentEnrollment from './components/StudentEnrollment';
import LoginAdmin from './components/LoginAdmin';
import LoginStudent from './components/LoginStudent';
import AddInternship from './components/AddInternship';
import Scheduler from './components/Scheduler';
import Profile from './components/Profile';
import Role from './components/Role';
import Recruiters from  './components/Recruiters';
import Help from './components/Help';

import Dashboard1 from './components/Dashboard1';
import Notify from './components/Notify';


function App() {
  return (
    <BrowserRouter>
      {/* <div className="mx-auto container items-center justify-center">
       <nav>
          <ul className="flex flow-row gap-3 underline text-blue-500">
            
            <li>
              <Link to="/add">Add Todo</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/ongoing-companylist">OngoingCompanies</Link>
            </li>    
            <li>
              <Link to="/internship">Internships</Link>
            </li>    
            <li>
              <Link to="/student-enrollment">Student Enrollment Form</Link>
            </li>   
            <li>
              <Link to="/login-admin">Admin Login</Link>
            </li>  
            <li>
              <Link to="/login-student">Student Login</Link>
            </li>  
            <li>
              <Link to="/add-internship">Add Internship</Link>
            </li>     
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/scheduler">Scheduler</Link>
            </li>
            
          </ul>
        </nav>

</div> */}
      
        <Routes>
        <Route path="/" Component= {Role} />
          <Route path="/add" Component={AddTodo} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/companylist" Component={CompanyList}/>
          <Route path="/upcoming-companylist" Component={UpcomingCompanies}/>
          <Route path="/ongoing-companylist" Component={OngoingCompanies}/>
          <Route path="/internship" Component={Internship}/>
          <Route path="/student-enrollment" Component={StudentEnrollment}/>
          <Route path="/login-admin" Component={LoginAdmin}/>
          <Route path="/login-student" Component={LoginStudent}/>
          <Route path="/add-internship" Component={AddInternship}/>
          <Route path="/scheduler" Component={Scheduler}/>
          <Route path="/notify" Component={Notify}/>
          <Route path="/profile" Component={Profile}/>
          <Route path="/recruiters" Component={Recruiters}/>
          <Route path="/help" Component={Help}/>
        
          <Route path="/dashboard1" Component={Dashboard1} />

        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

