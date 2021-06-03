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
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila ">
            <Col xs="12" >
              <div className="align-middle animated slideInLeft delay-0s">
                <h4 className="text-justify">
                <ul>
                  <li>
                    Conocerás que es el vencimiento o manejo de objeciones como una transición de negocio que tiene 
                    como finalidad concretar una venta.
                  </li>
                  <li>
                    Comprenderás  como podrás vencer o manejar objeciones en los diferentes escenarios  de llamada, 
                    identificando las  necesidades del cliente.
                  </li>
                  <li>
                    Aplicaras los conocimientos y habilidades comprendidas correspondientes al correcto vencimiento 
                    o manejo de objeciones con la finalidad de concretar una venta. 
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
