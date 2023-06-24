import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import './homepage.css'

function Contato () {
    return(
        <div id="contats">
            <div>
                <ul className="contaco">
                    <li className="listaco1">
                        <h4><a>Institucional</a></h4>
                        <p><a>Política e Privacidade</a></p>
                        <p><a>Sobre</a></p>
                        <p><a>Trabalhe Conosco</a></p>
                        <p></p>
                    </li>
                    <li className="listaco1">
                        <h4>Localização</h4>
                        <p>Rua Pedro Borges, 367, Fortaleza, CE</p>
                    </li>
                    <li className="listaco1">
                        <h4>Fones</h4>
                        <p>(85) 98744-3456 </p>
                        <p>(85) 98744-3778</p>
                    </li>
                    <li className="listaco1">
                        <h4>Formas de Pagamento</h4>
                        <p>PIX</p>
                        <p>Boleto</p>
                        <p>Cartão de crédito</p>
                        <p></p>
                    </li>
                </ul>
            </div>

        
        <footer className="footerco">
            <ul className="listaco">
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaTwitter/>
                </li>
                <li>
                    <FaWhatsapp/>
                </li>
            </ul>
            <p><span>Cell Imports</span> &copy; 2023</p>
        </footer>
        </div>

    );
}

export default Contato;