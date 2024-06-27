//import Name from './Componentes/Challenge';
import Componente from './Componentes/componente';
import './App.css'


function App() {

  const cars = [
    {id: '30', nome: "bmw",cor: "branco",km: "10"},
    {id: '25', nome: "hilux",cor: "preto",km: "0",}]


  return (
    
      <div className='App'>
      
      
          <div>
            {cars.map((car)=>(
           <Componente
              key={car.id}
              name={car.nome}
              color={car.cor}
              kilometros={car.km}
             />
            ))}
          
          </div>

      </div>
  );
}

export default App
