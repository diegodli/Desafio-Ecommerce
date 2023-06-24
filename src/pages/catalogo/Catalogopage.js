import "./catalogo.css";
import React, { useEffect, useState } from "react";
import Homepage from "../../Components/Homepage";
import Slidercatalogo from "../../Components/Slidercatalogo";
import Contato from "../../Components/Contato";

function Catalogo () {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const url='https://apitrainees.herokuapp.com/celulares'
            const response = await fetch(url);
            const objJson = await response.json()
            setData(objJson) 
        }
        fetchApi();
    },[])
    
    
    
    return(
        <div>
            <Homepage/>
            <Slidercatalogo/>
        <div class="storepage">
            <h1>Nossos Produtos</h1>
            
            <div class="catalogo">
                {
                    data.map((e) => (
                        <div class='boxcel2' key={e.nome}>
                            
                            <img class="imgcelstore" src={e.img}></img>
                            <h4>{e.nome}</h4>
                            
                            <h4>{e.preco}</h4>
                            <button >Comprar agora</button>
                            <p>{e.descricao}</p>


                        </div>
                    ))
                }
            </div>
        </div>
        <Contato/>
        </div>


    );
}

export default Catalogo;