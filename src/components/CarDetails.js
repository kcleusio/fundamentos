const CarDetails =({brand, km, cor, estado}) =>{
  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
      </ul>
      {estado && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails