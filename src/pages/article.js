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
                    <div className="side side_1">
                    
                    </div>
                    <div className="side side_2">
                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32</p>
                    </div>
                </div>
         
            </div>
        </React.Fragment>)
    }
}
export default Article 