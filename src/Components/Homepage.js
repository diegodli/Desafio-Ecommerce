
import { Link } from 'react-router-dom';
import './homepage.css';
import React, {useState} from "react"; 



function Homepage() {

  const [active, setActive]= useState("navbarul");
  const navToggle = () => {
    active === "navbarul" ? setActive("navbarul nav__active"): setActive("navbarul");
  };

  return (
    <section id='header'>
      
      <Link to='/' ><img src="/logoimagem(1).png" className="imglogo1"></img></Link>

      <div className="navbar">
        <ul className={active}>
          <li className='list'><a><Link to ='/'>Home</Link></a></li>
          <li className='list'><a href="#service" >Serviços </a></li>
          <li className='list'><a href="#lancamentos" >Lançamentos </a></li>
          <li className='list'><a href="#Sobre" >Sobre </a></li>
          <li className='list'><a href="" >Contato </a></li>
          </ul>
      </div>
      <div onClick={navToggle} className='nav__toggler'>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        
      </div>
    </section>
    

  );
}

export default Homepage;

