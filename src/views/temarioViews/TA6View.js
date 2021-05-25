import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner,CardHeader } from 'reactstrap'

class TA6View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )
  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left bgH" style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.2  Habilidades para el vencimiento  de objeciones</h5>
        </CardHeader>
        <CardBody >
          <Row className="centrado-fila">
            <Col xs="2">

            </Col>

            <Col xs="10" className="text-justify">

            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Identificar las necesidades del cliente
              </div>
            </Col>
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Identificar motivo, problema o situación del cliente que le impida  comprar el producto.
              </div>
            </Col>
            <Col xs="4" >
              <div className="cajaA1 text-center">
                <b>Ejemplo</b>.<br />
                Costo del producto.<br />
                Tiempo de llegada.<br />
                Desconfianza en la marca
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-4">
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Brindar beneficios adecuados a la o las necesidades del cliente
              </div>
            </Col>
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Identificar cual o cuales son los mejores beneficios que se le pueden brindar al cliente para lograr
                que adquiera el producto o servicio.
              </div>
            </Col>
            <Col xs="4" >
              <div className="cajaA1 text-center">
                <b>Ejemplo</b>.<br />
                Beneficios del producto.<br />
                Calidad.<br />
                Servicios adicionales.<br />
                Garantías.<br />
                Confiabilidad de la marca.
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA6View
