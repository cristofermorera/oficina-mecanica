import { AuthContext } from '../contexts/auth/authContext';
import { useContext } from 'react';
import { Topnav, TopnavLink } from './style';
import { Link } from 'react-router-dom';
function Header() {
    const auth = useContext(AuthContext);
    return (
        <>
            <Topnav>
                <TopnavLink className="active"><Link to="/home">Clientes</Link></TopnavLink>
                <TopnavLink ><Link to="/profissionais">Profissionais</Link></TopnavLink>
                <TopnavLink ><Link to="/produtos">Produtos</Link></TopnavLink>
                <TopnavLink ><Link to="/os">Ordem de Serviço</Link></TopnavLink>
                <TopnavLink ><Link to="/vendas">Vendas</Link></TopnavLink>
                <TopnavLink className="logout">{auth.user && <button onClick={auth.signout}>Sair</button>}</TopnavLink>
            </Topnav>
        </>

    )
}

export default Header;