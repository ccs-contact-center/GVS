import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner,CardHeader } from 'reactstrap'
import Audio from '../../assets/img/safelite/audio.png'
import Audio6Slide12 from '../../assets/audio/Audio6Slide12.mp4'
import AvatarAudio from '../../assets/img/safelite/avatarAudio.png'

class TA9View extends Component {


  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  );

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left bgH" style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.3 Proceso de vencimiento de objeciones</h5>
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
                <source src={Audio6Slide12}></source>
              </audio>
            </Col>
            <Col xs="5">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                    Saber identificar las necesidades del cliente es una habilidad fundamental para poder vencer
                    objeciones y  brindar el  beneficio adecuado al cliente.
                </p>
                  <p>
                    Ahora identifiquemos los principales  escenarios de objeciones de clientes Safelite y como podemos
                    vencerlas.  <br />
                    ¡Sigamos!
                </p>
                </div>
              </div><br />
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
export default TA9View
