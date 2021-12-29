import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './MINSA - Carnet Vacunación_files/app20211210.min.css'


class MainScreen extends React.Component {
  render(){
    return (  
      <div class="wrapper" >
        <div class="app" id="japp">
        <div class="aContainer">
            <div class="aLogo">
                <img src="./MINSA - Carnet Vacunación_files/logo-carnet-opt.png" class="aLogoImg" alt="Logo Carnet de Vacunación - MINSA"/>                
            </div> 
            <div class="text-center" style={{padding:"2rem 0.5rem"}}>      
                <div><img src="./MINSA - Carnet Vacunación_files/comprobado.png"/></div>
                <div style={{fontSize:"1.2rem", padding:"0.5rem", background: "rgba(255,255,255, 0.7)", lineHeight: "2rem", color: "#1f484a"}}>
                    <div>IDEL CHARALLA YANAPA</div>
                    <div> <b>DNI</b> 45XXXX69</div>
                    <div style={{color:"#3e8d5e"}}><b>DOSIS COMPLETA</b></div>
                </div>
            </div>
            <hr class="aLine1"/>
            <div class="text-center" style={{color:"#6c6c6c"}}>
                Copyright © 2021. Desarrollado por la Oficina General de Tecnologías de la Información del Ministerio de Salud | Todos los derechos reservados.                
            </div>            
            
        </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <MainScreen />,
  document.getElementById('root')
);

/*
<div class="text-center" style="padding:2rem 0.5rem">      
                <div><img src="./MINSA - Carnet Vacunación_files/comprobado.png"/></div>
                <div style="font-size:1.2rem; padding:0.5rem; background: rgba(255,255,255, 0.7); line-height: 2rem; color: #1f484a;">
                    <div>SANCHEZ PINTO RODRIGO RICHARD</div>
                    <div> <b>DNI</b> 77XXXX14</div>
                    <div style="color:#3e8d5e"><b>DOSIS COMPLETA</b></div>
                </div>
            </div>
            <hr class="aLine1"/>
            <div class="text-center" style="color:#6c6c6c">
                Copyright © 2021. Desarrollado por la Oficina General de Tecnologías de la Información del Ministerio de Salud | Todos los derechos reservados.                
            </div>            
token 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
*/