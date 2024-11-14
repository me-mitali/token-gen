import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// import 'antd/dist/antd.css';
import Home from './assets/pages/home/Home';
import AdminLogin from './assets/admin/AdminLogin';
import Signup from './assets/authentication/signup/Signup';
import Login from './assets/authentication/login/Login';
import TokenGenerator from './assets/pages/generateToken/TokenGenerator';
import AdminDashboard from './assets/admin/Dashboard';
import ViewTokens from './assets/pages/tokensList/ViewTokens';
import UserPage from './assets/pages/userPage/UserPage';

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/generate" element={<TokenGenerator />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/tokens" element={<ViewTokens />} />
      <Route path="/user" element={<UserPage />} />
      

    </Routes>
  </Router>
  )
}

export default App