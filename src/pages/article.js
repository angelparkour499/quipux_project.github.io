import React from "react"
import '../components_style/article.scss'

class Article extends React.Component {

    render() {
        return(<React.Fragment>
            <div className="art">
                <div className="grid-container">
                    <div className="contact_info">
                        <h2>INFORMACIÓN DEL CONTACTO</h2>
                        <ul>
                            <li><p><b>Dirección</b><br/>Carrera 52 #91 - 66</p></li>
                            <li><p><b>Correo electrónico</b><br/>usuarioapellido@gmail.com</p></li>
                            <li><p><b>Sitio Web</b><br/><a href="#">www.usuarioapellido.com</a></p></li>
                            <li><p><b>Red social</b><br/><a href="#">www.instagram.com/usuarioApellido</a></p></li>
                            <li><p><b>Dirección de correspondencia de correo</b><br/>Carrera 39 # 36SUR - 56<br/>Envigado Antioquia</p></li>
                            <li><p><b>Número de teléfonos</b><br/>Fijo<br/>(4) 265-77-57<br/>Celular<br/>(312) 792-11-22</p></li>
                        </ul>
                    </div>
                    <div className="side side_1"></div>
                    <div className="side side_2"></div>
                </div>
            </div>
        </React.Fragment>)
    }
}
export default Article 