import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import CreateAccount from '../pages/CreateAccount';


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/dashboard" replace />} />
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/createAccount' element={<CreateAccount />}/>
    </Routes>
  )
}
export default Router;
