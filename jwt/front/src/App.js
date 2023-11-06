import './App.css';
import { ToastContainer } from 'react-toastify';
import FormRegister from './form_register/FormRegister';
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Header from './header/Header';
import DashBoard from './dashBoard/DashBoard';
import EditUser from './editUser/EditUser';

// import Upload from './form_register/Upload';



function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/register' element={<FormRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashBoard' element={<DashBoard />} />
        <Route path='/editUser/:id' element={<EditUser />} />
      </Routes>

      {/* <Upload /> */}
    </div>
  );
}

export default App;
