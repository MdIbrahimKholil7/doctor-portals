
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import Appointments from './components/Page/Appointments/Appointments'
function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
      </Routes>
    </div>
  );
}

export default App;
