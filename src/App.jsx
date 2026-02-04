import { Auth } from './pages/Auth/Auth.jsx';
import { Routes, Route } from 'react-router-dom';
import { SigninCard } from './components/organisms/Auth/SigninCard.jsx';
import { SignupCard } from './components/organisms/Auth/SignupCard.jsx';
export default function App() {
  
  return (
    <Routes>
      <Route path='/auth/signin' element={<Auth><SigninCard/> </Auth>} />
      <Route path='/auth/signup' element={<Auth><SignupCard/></Auth>} />
    </Routes>
  );
}