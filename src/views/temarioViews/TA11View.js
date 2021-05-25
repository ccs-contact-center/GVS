import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner,CardHeader } from 'reactstrap'
import Safe7 from '../../assets/img/safelite/safe7.png'
import Safe5 from '../../assets/img/safelite/safe5.png'
import Safe6 from '../../assets/img/safelite/safe6.png'

class TA11View extends Component {


  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  );

  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left bgH" style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.4 Principales escenarios  de objeciones clientes Safelite</h5>
        </CardHeader>
        <CardBody >
          <Row>
            <Col xs="12">
              <p>Beneficios para clientes Safelite  </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="2">
              <img
                src={Safe5}
                style={{ cursor: "pointer" }}
                alt="safe5"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
            </Col>
            <Col xs="3">
              <div className="cajaA1 text-center">
                Garantías.<br />
                Remplazo: 2años traspaso de aire y agua.<br />
                Reparación: De por vida.

              </div>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="2">
              <img
                src={Safe6}
                style={{ cursor: "pointer" }}
                alt="safe6"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
            </Col>
            <Col xs="3">
              <div className="cajaA1 text-center">
                Cristal original:<br />
                Remplazo: Queda de 2 a 2:30 hrs.<br />
                Reparación:  Queda de 45 mins a 1 hora.

              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-1">
            <Col xs="2">
              <img
                src={Safe7}
                style={{ cursor: "pointer" }}
                alt="safe7"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
            </Col>
            <Col xs="3">
              <div className="cajaA1 text-center">
              Garantía cliente con convenio: Solo paga el 20% del deducible del cristal. 
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA11View
