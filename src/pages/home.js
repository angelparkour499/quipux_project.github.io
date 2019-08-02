import React from 'react'
import "../components_style/home.scss"
class Home extends React.Component {
    render() {
        return(<React.Fragment>
         <div className="structure_2">
             <div className="content_wrapper">
             <div className="content_wrapper_1">
                 <h2>INFORMACIÓN DE LA EMPRESA</h2><ul>
                 <li><p><b>Nombre</b><br />Quipux S.A.S</p></li>
                 <li><p><b>Fecha de creación</b><br />1995/05/16</p></li>
                 <li><p><b>Dirección</b><br />Carrera 43A No.3Sur-130.<br/>Ed. Milla de Oro<br/>Distrito de Negocios Torre 1.<br/>Piso 12<br/>Medellín &#9679; Colombia</p></li>
                 <li><p><b>Numero de teléfonos</b><br />Fijo<br/>+57 (4) 313-70-00<br/>Fax<br/>+57 (4) 313-44-77</p></li>
                 <li><p><b>Sitio web</b><br /><a href="www.quipux.com/site" target="_blank">www.quipux.com/site</a></p></li> 
                  </ul>
                  </div>
            <div className="content_wrapper_2">
<h2>INFORMACIÓN DEL CONTACTO</h2>
<div className="divider">
<ul>
    <li><p><b>Dirección</b><br/>Carrera 52 #91 - 66<br/>Medellín &#9679; Colombia</p></li>
    <li><p><b>Correo electrónico</b><br/>usuarioapellido@gmail.com</p></li>
    <li><p><b>Sitio Web</b><br/><a href="#">www.usuarioapellido.com</a></p></li>
    <li><p><b>Red social</b><br/><a href="#">www.instagram.com/usuarioApellido</a></p></li>
</ul>
<ul>
<li><p><b>Dirección de correspondencia de correo</b><br/>Carrera 39 # 36SUR - 56<br/>Envigado &#9679; Antíoquia</p></li>
<li><p><b>Numero de teléfonos</b><br/>Fijo<br/>(4) 265-77-57<br/>Celular<br/>(312) 792-11-22</p></li>
</ul>
</div>
            </div>
         </div></div>
        </React.Fragment>

        )
    }
}
export default Home