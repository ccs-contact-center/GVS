import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, Modal, Button, ModalFooter, ModalBody,CardHeader } from 'reactstrap'
import Audio from '../../assets/img/safelite/audio.png'
import Audio6Slide12 from '../../assets/audio/Audio6Slide12.mp4'
import AvatarAudio from '../../assets/img/safelite/avatarAudio.png'

class TA11View extends Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto })
  };

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
          <h5> Evaluación</h5>
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
                    ¡Reforcemos lo aprendido!<br />
                    Pulsa el siguiente link para resolver una evaluación.<br />
                    ¡ÉXITO!
                </p>
                  <Button color="secondary" onClick={this.abrirModal}>https://docs.google.com/forms/</Button>
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

        <Modal isOpen={this.state.abierto} >
          <ModalBody className="centrado-fila"
          >
            <iframe
            id="encuesta"
            title="encuesta"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeIsMzhqx3AE01H7aZNDYpU785cDWaYs8UYJOh47eHr2_972Q/viewform"
              width="100%"
              height="900px"
            >
            </iframe>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.abrirModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default TA11View
