import { useState } from 'react'

const ListRender = () => {
  const [list] = useState (["Damir Trindade DAniel", "Ethan Trindade Daniel","Dayana Daniel"]);

  const [users, setUsers] = useState([
    {id: 1, name: "Mateus Rosa", idade: 78},
    {id: 2, name: "Maria de Fátima", idade: 18},
    {id: 3, name: "Astro Viva", idade: 37}
  ]);

  const eliminarAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>{
      return prevUsers.filter((user) => numeroAleatorio !== user.id)
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, i)=>(
          <li key={i}>{item}</li>
        ))}
      </ul>
      {users.map((user)=>(
        <li key={user.id}>
          {user.name} - {user.idade}
        </li>
      ))}

  <button onClick={eliminarAleatorio}>Apagar Aleatório</button>
    </div>
   
  );
};

export default ListRender