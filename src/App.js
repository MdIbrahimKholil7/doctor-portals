
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import Appointments from './components/Page/Appointments/Appointments'
import Login from './components/Page/Login/Login/Login';
import SignUp from './components/Page/Login/SignUp/SignUp';
import RequireAuth from './components/Page/Login/RequireAuth/RequireAuth';
import Dashboard from './components/Page/Dashboard/Dashboard';
import MyItem from './components/Page/Dashboard/MyItem';
import Review from './components/Page/Dashboard/Review';
import Alluser from './components/Page/Dashboard/Alluser';
import RequireAdmin from './components/Page/Login/RequireAuth/RequireAdmin';
import AddDoctor from './components/Page/Dashboard/AddDoctor';
import ManageDoctor from './components/Page/Dashboard/ManageDoctor';
function App() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointments' element={
          <RequireAuth>
            <Appointments />
          </RequireAuth>} >
        </Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<MyItem />} />
          <Route path='review' element={<Review />} />
          <Route path='alluser' element={<RequireAdmin><Alluser /></RequireAdmin>} />
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>} />
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor /></RequireAdmin>} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
