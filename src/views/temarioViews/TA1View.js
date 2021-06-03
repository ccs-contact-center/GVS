import React, { Component } from 'react'
import {CardHeader, CardBody, Col, Row,Spinner } from 'reactstrap'
import Audio from '../../assets/img/safelite/audio.png'
import Audio1Slide5 from '../../assets/audio/Audio1Slide5.mp4'
import AvatarAudio from '../../assets/img/safelite/avatarAudio.png'


class TA1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>
  )
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left " style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.1 Que es el vencimiento o  manejo de objeciones.</h5>
        </CardHeader>
        <CardBody >
          <Row className="centrado-fila">
            <Col xs="2">
              <img
                src={Audio}
                style={{ cursor: "pointer" }}
                alt="Audio"
                className="img-fluid  animated slideInLeft "
                onClick={this.playAudio}
              />
              <audio className="audio-element">
                <source src={Audio1Slide5}></source>
              </audio>
            </Col>
            <Col xs="5">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                    ¡Hola, bienvenido (a)! En el siguiente curso conoceremos que es el vencimiento o manejo de objeciones.
                    Acompáñame.
                </p>
                </div>
              </div><br/>
              <img
                src={AvatarAudio}
                //style={{ width: 250 }}
                alt="AvatarAudio"
                className="img-fluid  animated slideInUp "
              />

            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA1View
