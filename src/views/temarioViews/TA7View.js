import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner,CardHeader } from 'reactstrap'
// import Audio from '../../assets/img/safelite/audio.png'
// import Audio9Slide11 from '../../assets/audio/Audio9Slide11.mp4';

class TA7View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )
  // playAudio() {
  //   const audioEl = document.getElementsByClassName("audio-element")[0]
  //   audioEl.play()
  //   const aparece = document.getElementsByClassName("div-aparece")
  //   aparece.addClase("aparece")

  // }
  
  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left bgH" style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.3 Proceso de vencimiento de objeciones</h5>
        </CardHeader>
       
        <CardBody >
           {/* <img
                src={Audio}
                style={{ cursor: "pointer" }}
                alt="Audio"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
              <audio className="audio-element">
                <source src={Audio9Slide11}></source>
              </audio> */}
          <Row className="centrado-fila">
            <Col xs="2">
              <p>1</p>
            </Col>
            <Col xs="2">
              <p>1. Contacto con el cliente.</p>
            </Col>
            <Col xs="2">
              <p>3</p>
            </Col>
            <Col xs="2">
              <p>4</p>
            </Col>
            <Col xs="2">
              <p>5</p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="2">
              <p>1</p>
            </Col>
            <Col xs="2">
              <p>2</p>
            </Col>
            <Col xs="2">
              <p>3</p>
            </Col>
            <Col xs="2">
              <p>4</p>
            </Col>
            <Col xs="2">
              <p>5</p>
            </Col>
            <Col xs="2">
              <p>6</p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA7View
