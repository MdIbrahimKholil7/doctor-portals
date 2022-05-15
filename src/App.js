
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import Appointments from './components/Page/Appointments/Appointments'
import Login from './components/Page/Login/Login/Login';
import SignUp from './components/Page/Login/SignUp/SignUp';
import RequireAuth from './components/Page/Login/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointments' element={
        <RequireAuth>
          <Appointments />
        </RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
