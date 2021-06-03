import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner,CardHeader } from 'reactstrap'
import Audio from '../../assets/img/safelite/audio.png'
import Audio3Slide9ejm1 from '../../assets/audio/Audio3Slide9ejm1.mp4';
import Audio3Slide9ejm2 from '../../assets/audio/Audio3Slide9ejm2.mp4';
import Audio3Slide9ejm3 from '../../assets/audio/Audio3Slide9ejm3.mp4';

class TA5View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  playAudio1() {
    const audioEl1 = document.getElementsByClassName("audio-element1")[0]
    audioEl1.play()
  }
  playAudio2() {
    const audioEl2 = document.getElementsByClassName("audio-element2")[0]
    audioEl2.play()
  }
  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left " style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.2  Habilidades para el vencimiento  de objeciones</h5>
        </CardHeader>
        
        <CardBody >
          <Row className="centrado-fila">
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Sondeo
              </div>
            </Col>
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Hacer preguntas asertivas al cliente para identificar su la necesidad.
              </div>
            </Col>
            <Col xs="4" >
              <img
                src={Audio}
                style={{ cursor: "pointer", width: "60px", marginBottom: "-20px" }}
                alt="Audio"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
              <audio className="audio-element">
                <source src={Audio3Slide9ejm1}></source>
              </audio>
              <div className="cajaA1 text-center">
                <b>Ejemplo</b>.<br />
                Agente:<br />
                Sr. Martínez ¿Qué situación le impide realizar su compra en estos momentos?
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-4">
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Parafraseo
              </div>
            </Col>
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Repetir con otras palabras la situación que el cliente esta expresando, con la finalidad de hacerlo
                saber que estamos poniendo atención a su situación.
              </div>
            </Col>
            <Col xs="4" >
              <img
                src={Audio}
                style={{ cursor: "pointer", width: "60px", marginBottom: "-20px" }}
                alt="Audio"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio1}
              />
              <audio className="audio-element1">
                <source src={Audio3Slide9ejm2}></source>
              </audio>
              <div className="cajaA1 text-center">
                <b>Ejemplo</b>.<br />
                Agente:<br />
                Sr. Martínez me comenta que la situación  por la que no puede realizar la compra es económica y
                nuestro costo se le hace elevado…
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-4">
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Frases de empatía
              </div>
            </Col>
            <Col xs="4" >
              <div className="cajaA1 text-center">
                Generar frases de enlace que hagan saber al cliente que lo estas escuchando y entendiendo.
              </div>
            </Col>
            <Col xs="4" >
            <img
                src={Audio}
                style={{ cursor: "pointer", width: "60px", marginBottom: "-20px" }}
                alt="Audio"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio2}
              />
              <audio className="audio-element2">
                <source src={Audio3Slide9ejm3}></source>
              </audio>
              <div className="cajaA1 text-center">
                <b>Ejemplo</b>.<br />
                Agente:<br />
                Sr. Martínez comprendo la situación que me comenta, precisamente por ese motivo permítame mencionarle
                 los beneficios que tenemos para usted.
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA5View
