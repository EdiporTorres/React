import Home from "./Pages/Home";
import './App.css';
import Card from "./Components/Cards/Card";
import Contador from "./Components/Contador/Contado";
import Tarefa from "./Components/Tarefa/Tarefa";
function App(){
  return(
    <> 
  
    <Card titulo="React" descricao="teste" />
    <Contador />
   <Home/>
   <Tarefa />
</>
  )
}
 



export default App;