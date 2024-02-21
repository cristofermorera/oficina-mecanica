import  "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../navbar';

function Private(){
    
    return (
        <>
            <Header/>
            <div className="wrapper">
                <div className="card-body">
                    <h2 className="card-title text-light" >Sistema de Oficina</h2>
                </div>
            </div>
        </>
        
    );
}
export default Private;