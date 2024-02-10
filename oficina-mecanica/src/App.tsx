import { useContext } from 'react';
import Router from './components/router/router';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/auth/authContext';


function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/home">Privada</Link>&nbsp;&nbsp;&nbsp;
          {auth?.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Router/>
    </div>
      
  );
};

export default App;
