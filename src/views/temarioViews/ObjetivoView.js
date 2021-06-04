import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivos</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila ">
            <Col xs="12" >
              <div className="align-middle animated slideInLeft delay-0s">
                <h4 className="text-justify">
                  <ul>
                    <li>
                      Aplicarás <b>técnicas</b> de manejo de objeciones para concretar una venta en diferentes
                    escenarios con clientes
                  </li>
                    <li>
                      Conocerás <b>estrategias</b> para concretar una venta a partir del manejo adecuado de <b>objeciones</b>
                      del cliente.
                  </li>
                    <li>
                      Comprenderás como identificar las <b>necesidades</b> del cliente para manejar sus objeciones.
                  </li>
                  </ul>
                </h4>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
