// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import LayoutComp from './components/layout/LayoutComp';
import SignIn from './components/signUp-signIn/SignIn';
import SignUp from './components/signUp-signIn/SignUp';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComp />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
