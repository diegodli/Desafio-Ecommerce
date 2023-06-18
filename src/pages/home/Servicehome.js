import "./homepage.css";

function Servicehome () {
    return(
        <section id="service" >
            <div class="box">
                <img src="./camiicon.png" class="cambox" ></img>
                <h6>FRETE GRÁTIS</h6>
                <p>Confira as condições</p>
            </div>
            <div class="box">
                <img src="./cartaoicon.png" class="cartaobox" ></img>
                <h6>ATÉ 12X SEM JUROS</h6>
                <p>10% OF no boleto</p>
            </div>
            <div class="box">
                <img src="./localicon.png"  class="localbox"></img>
                <h6>ENVIAMOS</h6>
                <p>Para todo o Brasil</p>
            </div>
        </section>
    )
}

export default Servicehome;