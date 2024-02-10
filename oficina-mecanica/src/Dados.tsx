type data = {
    name : string;
    sobrenome : string;
    idade : number;

}

function Dados(props: data) {
    return (
      <div>
        {props.name} {props.sobrenome}
        <br/>
        <b>Idade</b>: {props.idade}
      </div>
    );
  }
  
  export default Dados;
  