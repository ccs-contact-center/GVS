import React, { Component } from 'react'
import { CardBody, CardHeader, Row, Col,Spinner } from 'reactstrap'
import  'animate.css';
import bienvenida from '../../assets/img/safelite/bienvenida.jpg'

class BienvenidaView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>
  )
  render() {
    return (
      <div>
        <CardHeader className="text-center" >
          <h1>¡Bienvenid@! </h1>
        </CardHeader>
        <CardBody className="text-center">
          <Row className="centrado-fila">
            
            <Col xs="12">
              <img
                src={bienvenida}
                style={{ width: 500 }}
                alt="bienvenida"
                className="img-fluid bordeImagen animated  bounceInRight delay-2s"
              />
              <div className="animated  bounceInLeft delay-1s">
             <h1 className="text-white">GESTION DE VENTAS,<br/> VENCIMIENTO DE OBJESIONES</h1>
             </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default BienvenidaView
