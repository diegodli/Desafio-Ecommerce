
import Homepage from "../../Components/Homepage";
import Sliderhome from "../../Components/Sliderhome";
import Servicehome from "../../Components/Servicehome";
import Lancahome from "../../Components/Lancahome";
import Sobrehome from "../../Components/Sobrehome";
import Contato from "../../Components/Contato";

function Home() {
  return (
    <div className="App">
      <Homepage/>
      <Sliderhome/>
      <Servicehome/>
      <Lancahome/>
      <Sobrehome/>
      <Contato/>
     
    </div>
  );
}

export default Home;