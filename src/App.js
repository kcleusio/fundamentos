import './App.css';
import PrimeiroComponente from './components/PrimeiroComponent';
import TampleteExpressions from './components/TampleteExpressions';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const nome ="Damir Trindade";
  return (
    <div className="App">
     <PrimeiroComponente />
     <TampleteExpressions />

      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* props */}
      <ShowUserName nome={nome}/>

      {/* destructuring props*/}

      <CarDetails brand ="Volvo" km={10000} cor="Azul" estado={false}/>
      {/* Reaproveitar */}

      <CarDetails brand ="Ranger Rover" km={0} cor="Preta" estado={true}/>

    </div>
  );
}

export default App;
