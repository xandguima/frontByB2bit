import {SignIn} from '../pages/SignIn';
import {Routes,Route,Navigate} from 'react-router-dom';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}