import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner,CardHeader } from 'reactstrap'
import Safe1 from '../../assets/img/safelite/safe1.png'
import Safe2 from '../../assets/img/safelite/safe2.png'
import Safe3 from '../../assets/img/safelite/safe3.png'
import Safe4 from '../../assets/img/safelite/safe4.png'

class TA10View extends Component {


  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  );

  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left " style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.4 Principales escenarios  de objeciones clientes Safelite</h5>
        </CardHeader>
        <CardBody >
          <Row>
            <Col xs="12">
              <p>Recordemos cuales son las principales objeciones de los clientes Safelite.  </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="2">
              <img
                src={Safe1}
                style={{ cursor: "pointer" }}
                alt="safe1"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
            </Col>
            <Col xs="3">
              <div className="cajaA1 text-center">
                Costo.
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="2">
              <img
                src={Safe2}
                style={{ cursor: "pointer" }}
                alt="safe2"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
            </Col>
            <Col xs="3">
              <div className="cajaA1 text-center">
                Tiempo de llegada del cristal.
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="2">
              <img
                src={Safe3}
                style={{ cursor: "pointer" }}
                alt="safe3"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
            </Col>
            <Col xs="3">
              <div className="cajaA1 text-center">
                Asegurado sin convenio/ No asegurado.
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="2">
              <img
                src={Safe4}
                style={{ cursor: "pointer" }}
                alt="safe4"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
            </Col>
            <Col xs="3">
              <div className="cajaA1 text-center">
                Auto en reparación mecánica y no se puede agendar cita.
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA10View
