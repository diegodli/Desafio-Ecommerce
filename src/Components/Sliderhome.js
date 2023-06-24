import { useNavigate } from "react-router-dom";
import "./homepage.css";

function Sliderhome () {

    const navigate = useNavigate();
    const goToCatalogoPage = () => {
        navigate('/Catalogo');

    }





    return(
    <section id="slider">
        <div className="textslider">
          <h1>Cell Imports</h1>
          <p>As melhores ofertas de smartphones vocẽ encontra aqui, todo o nosso catálogo com o menor preço do mercado.</p>
          <button data-testid="catalogo-button" onClick={goToCatalogoPage} href="/Catalogo">Nosso catálogo</button>
        </div>
        <div>
            <img className="imghome" src="/iphone1.png"></img>
        </div>

    </section>
    )
}

export default Sliderhome;