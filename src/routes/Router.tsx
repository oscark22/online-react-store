import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/dashboard" replace />} />
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  )
}
export default Router;
