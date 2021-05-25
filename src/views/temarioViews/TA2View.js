import React, { Component } from 'react'
import { CardBody, Col, Row,Spinner,CardHeader } from 'reactstrap'
import ta1_1 from '../../assets/img/safelite/ta1-1.png'

class TA2View extends Component {
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
                src={ta1_1}
                alt="ta1_1"
                className="img-fluid  animated slideInLeft "
              />
            </Col>
            <Col xs="8" className="text-justify">
              <p>
                Las objeciones son <b>excusas, motivos  y/o dudas que los clientes</b>  anteponen para comprar
                un producto o servicio.
             </p>
              <p>
                El cliente presenta dudas en cuanto al precio, valor, relevancia del producto o la posibilidad 
                económica que tiene para comprarlo.
             </p>
             <p><b>EJEMPLOS DE OBJECIONES EN VENTAS</b></p>
             <ul>
               <li>¡Es demasiado caro!</li>
               <li>Otro proveedor me ofrece una mejor oferta.</li>
               <li>Puedo conseguir un mejor costo con otra empresa.</li>
               <li>El tiempo de llegada es muy largo.</li>
               <li>No conozco mucho la marca.</li>
             </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA2View
