import React, { Component } from 'react'
import { CardBody, Col, Row ,Spinner,CardHeader} from 'reactstrap'
import ta1_2 from '../../assets/img/safelite/ta1-2.png'

class TA4View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>
  )
  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left bgH" style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.1 Que es el vencimiento o  manejo de objeciones.</h5>
        </CardHeader>
        <CardBody >
          <Row className="centrado-fila">
            <Col xs="4">
              <img
                src={ta1_2}
                alt="ta1_2"
                className="img-fluid  animated slideInLeft "
              />
            </Col>
            <Col xs="8" className="text-justify">
              <p>
               <b>QUE ES EL VENCIMIENTO O MANEJO DE OBJECIONES</b>  
             </p>
              <p>
                El cliente presenta dudas en cuanto al precio, valor, relevancia del producto o la posibilidad 
                económica que tiene para comprarlo.
             </p>
             <p>El manejo de objeciones es la habilidad de  identificar  las necesidades del cliente mediante el 
               sondeo, de esta manera poder responder a la objeción con un beneficio objetivo y adecuado para el 
               cliente.</p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA4View
