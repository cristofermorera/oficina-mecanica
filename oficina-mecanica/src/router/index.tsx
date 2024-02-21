import {Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/register';
import Login from '../pages/login';
import Professionals from '../pages/professionals';
import Products from '../pages/products';
import Os from '../pages/os';
import Sales from '../pages/sales';
import RequireAuth from '../contexts/auth/requireAuth';

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/profissionais" element={<RequireAuth><Professionals /></RequireAuth>} />
            <Route path="/produtos" element={<RequireAuth><Products /></RequireAuth>} />
            <Route path="/os" element={<RequireAuth><Os /></RequireAuth>} />
            <Route path="/vendas" element={<RequireAuth><Sales /></RequireAuth>} />
        </Routes>
    )
}

export default Router;