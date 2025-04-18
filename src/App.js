import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './Pages/Admin/AdminLogin'; // Make sure the path is correct
import InstituteLogin from './Pages/Institute/InstituteLogin';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import InstituteManage from './Pages/Admin/InstituteManage';
import InstituteRegistration from './Pages/Institute/InstituteRegistration';
import CourseManagenment from './Pages/Institute/CourseManagenment';
import BatchManagement from './Pages/Institute/BatchManagement';
import StudentManagment from './Pages/Institute/StudentManagment';
import PaymentManagment from './Pages/Institute/PaymentManagement';
import InquiryManagenment from './Pages/Institute/InquiryManagenment';
//import AdminDashboard from './Dashboard/adminDashboed';
import Dashboard from './Pages/Institute/Dashboard';

function App() {
  return (

    <Router>


      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Admin/AdminDashboed" element={<AdminDashboard/>} /> */}
        <Route path="/Admin/AdminLogin" element={<AdminLogin/>} />
        <Route path="/Admin/InstituteManage" element={<InstituteManage/>} />
        <Route path="/Institute/InstituteLogin" element={<InstituteLogin />} />
        <Route path="/Institute/InstituteRegistration" element={<InstituteRegistration />} />
        <Route path="/Institute/Dashboard" element={<Dashboard/>} />
        <Route path="/Institute/CourseManagenment" element={<CourseManagenment />} />
        <Route path="/Institute/BatchManagement" element={<BatchManagement />} />
        <Route path="/Institute/StudentManagment" element={<StudentManagment />} />
        <Route path="/Institute/PaymentManagment" element={<PaymentManagment />} />
        <Route path="/Institute/InquiryManagenment" element={<InquiryManagenment/>} />

      </Routes>
    </Router>
  );
}

export default App;
