import {Routes, Route } from 'react-router-dom';
import Home from '../home/';
import Register from '../register/';
import Login from '../login/';
import RequireAuth from '../../contexts/auth/requireAuth';

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        </Routes>
    )
}

export default Router;