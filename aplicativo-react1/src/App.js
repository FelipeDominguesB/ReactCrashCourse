import Header from './components/Header'
import Tasks from './components/Tasks';
function App() {

  //Só pode retornar um elemento pai/parent por vez, ele pode conter elementos internos 
  return (
    <div className="container">
      <Header />
      <Tasks />
      
    </div>  
  );
}

export default App;
