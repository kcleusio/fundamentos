import { useState } from "react"

const CondicionalRender =  ()=> {
  const [x] = useState(false);
  const [nome, setNome] = useState("Bruna")

  return (
    <div>
      <h1>Isso será Exibido</h1>
      {x && <p>Se x for true, Sim</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>Operador Ternário</h1>
      {nome === "Helder" ? (
        <div>
          <p>Nome é Helder</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setNome("Helder")}>Clica aqui</button>
    </div>
  );
};

export default CondicionalRender