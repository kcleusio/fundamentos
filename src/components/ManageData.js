import {useState} from 'react';

const ManageData = () => {

  let someData = 15;

  const [number, setNumber] = useState(2000);
  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClik={() => (someData = 30)}>Mudar Valor</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(45)}>Mudar para o state</button>
      </div>
    </div>
  )
}

export default ManageData