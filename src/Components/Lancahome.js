import './homepage.css';
import { useNavigate } from "react-router-dom";

function Lancahome() {

    const navigate = useNavigate();
    const goToCatalogoPage = () => {
        navigate('/Catalogo');
    }


    return(
        
        <section id="lancamentos">
            <h1>Lançamentos</h1>
            <div className="lanca">
                
            
             <div data-testid="catalogo-button" onClick={goToCatalogoPage} className="boxcel">
                <img src="./galaxys21(1).png" className="imgcel-1"></img>
                <p>Novo!</p>
                <h6>Galaxy S21 Ultra</h6>
                <img src="./estrelas.png" className="imgest"></img>
             </div>
             <div data-testid="catalogo-button" onClick={goToCatalogoPage} className="boxcel">
                <img src="./iphone14pro(1).png" className="imgcel-2"></img>
                <p>Novo!</p>
                <h6>Iphone 13 PRO MAX</h6>
                <img src="./estrelas.png" className="imgest"></img>
             </div>
             <div data-testid="catalogo-button" onClick={goToCatalogoPage} className="boxcel">
                <img src="./pixel-6(1).png" className="imgcel-3"></img>
                <p>Novo!</p>
                <h6>Google Pixel 6 PRO</h6>
                <img src="./estrelas.png" className="imgest"></img>
             </div >
             

            </div>
            <button data-testid="catalogo-button" onClick={goToCatalogoPage}>Veja mais</button>

        </section>

    );
}

export default Lancahome;