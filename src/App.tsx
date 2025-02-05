import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import withAuth from './Auth/Auth'
import Dashboard from './components/Dashboard'
import DashboardLayout from './components/Layout/DashboardLayout'
import UserDataForm from './components/UserDataForm'

function App() {
   const ProtectedDashboard=withAuth(Dashboard);
   const ProtectedUserForm=withAuth(UserDataForm);

  return (

    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Register />} /> 
    <Route path="/dashboard" element={<DashboardLayout><ProtectedDashboard/></DashboardLayout>} /> 
    <Route path="/userform" element={<DashboardLayout><ProtectedUserForm/></DashboardLayout>} />
    </Routes>

  )
}

export default App
