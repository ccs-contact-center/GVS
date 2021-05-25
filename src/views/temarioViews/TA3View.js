import React, { Component } from 'react'
import { CardBody, Col, Row,Spinner,CardHeader, } from 'reactstrap'
import Audio from '../../assets/img/safelite/audio.png'
import Audio2Slide7 from '../../assets/audio/Audio2Slide7.mp4'
import AvatarAudio from '../../assets/img/safelite/avatarAudio.png'

class TA3View extends Component {
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
         <CardHeader className="text-left bgH" style={{paddingBottom:"0px"}}>
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
                <source src={Audio2Slide7}></source>
              </audio>
            </Col>
            <Col xs="5">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                    Ahora que ya sabes que son las objeciones es necesario que sepas como descubrirlas, 
                    resolverlas o debatirlas  para llegar a tu objetivo.<br/>
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
export default TA3View
