import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner,CardHeader } from 'reactstrap'
import Audio from '../../assets/img/safelite/audio.png'
import Audio8Slide17 from '../../assets/audio/Audio8Slide17.mp4'
import AvatarAudio from '../../assets/img/safelite/avatarAudio.png'

class TA13View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  render() {
    return (
      <div className="animated fadeIn">
         <CardHeader className="text-left bgH" style={{paddingBottom:"0px"}}>
          <h5> Despedida</h5>
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
                <source src={Audio8Slide17}></source>
              </audio>
            </Col>
            <Col xs="5">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                    ¡Hemos concluido con este curso! Es necesario aplicar los conocimientos y habilidades obtenidas 
                    en cada interacción con el cliente.
                    Recuerda que tu papel es  muy IMPORTANTE.<br/>
                    ¡Gracias por tu tiempo!

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
export default TA13View
