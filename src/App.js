import logo from './logo.svg';
import './App.css';
import Homepage from './pages/home/Homepage'
import Sliderhome from "./pages/home/Sliderhome"
import Servicehome from './pages/home/Servicehome';
import Lancahome from './pages/home/Lancahome';
import Sobrehome from './pages/home/Sobrehome';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Sliderhome/>
      <Servicehome/>
      <Lancahome/>
      <Sobrehome/>
     
    </div>
  );
}

export default App;
