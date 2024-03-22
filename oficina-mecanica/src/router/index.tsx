import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Professionals from '../pages/Professionals';
import Products from '../pages/Products';
import Os from '../pages/Os';
import Teste from '../pages/Teste';
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
            <Route path="/teste" element={<RequireAuth><Teste /></RequireAuth>} />
        </Routes>
    )
}

export default Router;