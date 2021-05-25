import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactTimeout from 'react-timeout'
import Audio from '../../assets/img/safelite/audio.png'
import t3_1 from '../../assets/img/safelite/t3-1.png'
import t3_2 from '../../assets/img/safelite/t3-2.png'
import arrow1 from '../../assets/img/safelite/arrow1.png'
import arrow2 from '../../assets/img/safelite/arrow2.png'
import arrow3 from '../../assets/img/safelite/arrow3.png'
import arrow4 from '../../assets/img/safelite/arrow4.png'
import arrow5 from '../../assets/img/safelite/arrow5.png'
import Audio9Slide11 from '../../assets/audio/Audio9Slide11.mp4';
import Audio10Slide11 from '../../assets/audio/Audio10Slide11.mp4';
import Audio11Slide11 from '../../assets/audio/Audio11Slide11.mp4';
import Audio12Slide11 from '../../assets/audio/Audio12Slide11.mp4';
import Audio13Slide11 from '../../assets/audio/Audio13Slide11.mp4';

class TA7View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )

  state = {
    on: false
  }
  toggle = () => {
    this.setState({ on: !this.state.on })
  }
  handleClick = (e) => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    //this.props.setTimeout(this.toggle, 100) // call the `toggle` function after 5000ms
  }

  handleClick2
   = (e) => {
    const audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play()
    //this.props.setTimeout(this.toggle, 100) // call the `toggle` function after 5000ms
  }

  handleClick3 = (e) => {
    const audioEl = document.getElementsByClassName("audio-element3")[0]
    audioEl.play()
    //this.props.setTimeout(this.toggle, 100) // call the `toggle` function after 5000ms
  }

  handleClick4 = (e) => {
    const audioEl = document.getElementsByClassName("audio-element4")[0]
    audioEl.play()
    //this.props.setTimeout(this.toggle, 100) // call the `toggle` function after 5000ms
  }

  handleClick5 = (e) => {
    const audioEl = document.getElementsByClassName("audio-element5")[0]
    audioEl.play()
    //this.props.setTimeout(this.toggle, 100) // call the `toggle` function after 5000ms
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left bgH" style={{ paddingBottom: "0px" }}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.3 Proceso de vencimiento de objeciones</h5>
        </CardHeader>

        <CardBody >

          <Row className="centrado-fila text-center">
            <Col xs="2">
            <img
                src={Audio}
                style={{ cursor: "pointer",width:"50px" }}
                alt="Audio"

                className="img-fluid  animated slideInLeft "
                onClick={this.handleClick}
              />
              <audio className="audio-element">
                <source src={Audio9Slide11}></source>
              </audio>
            
              <p>1. Contacto con el cliente.</p>
            </Col>
            <Col xs="2">
              <img
                src={arrow2}
                style={{ width: "110px" }}
                alt="arrow2"
                className="img-fluid  animated slideInLeft "
              />
            </Col>
            <Col xs="2">
            <img
                src={Audio}
                style={{ cursor: "pointer",width:"50px" }}
                alt="Audio"

                className="img-fluid  animated slideInLeft "
                onClick={this.handleClick2}
              />
              <audio className="audio-element2">
                <source src={Audio10Slide11}></source>
              </audio>
              <p>2. Identificar necesidades.</p>
            </Col>
          </Row>
          <Row className="centrado-fila text-center">
            <Col xs="2">
              <img
                src={t3_1}
                alt="t3-1"
                className="img-fluid  animated slideInLeft "
              />
            </Col>
            <Col xs="2">
              <img
                src={arrow1}
                style={{ width: "60px" }}
                alt="arrow1"
                className="img-fluid  animated slideInLeft "
              />
               <img
                src={Audio}
                style={{ cursor: "pointer",width:"50px" }}
                alt="Audio"

                className="img-fluid  animated slideInLeft "
                onClick={this.handleClick3}
              />
              <audio className="audio-element3">
                <source src={Audio13Slide11}></source>
              </audio>
              <p>5. Cierre.</p>
            </Col>
            <Col xs="3">
            </Col>
            <Col xs="2 ">
           <div>
           <img
                src={arrow3}
                style={{ width: "60px" }}
                alt="arrow3"
                className="img-fluid  animated slideInLeft  "
              />
           </div>
              <div>
              <img
                src={Audio}
                style={{ cursor: "pointer",width:"50px" }}
                alt="Audio"

                className="img-fluid  animated slideInLeft "
                onClick={this.handleClick4}
              />
              <audio className="audio-element4">
                <source src={Audio11Slide11}></source>
              </audio>
              <p>3.Vencimiento  de objeciones.</p>
              </div>
            </Col>
            <Col xs="2">
            <img
                src={t3_2}
                alt="t3-2"
                className="img-fluid  animated slideInLeft "
              />
            </Col>
          </Row>
          <Row className="centrado-fila text-center">
            
            <Col xs="2">
            </Col>
            <Col xs="2">
            <img
                src={arrow5}
                style={{ width: "110px" }}
                alt="arrow5"
                className="img-fluid  animated slideInLeft "
              />
            </Col>
            <Col xs="2">
              
              <img
                src={Audio}
                style={{ cursor: "pointer",width:"50px" }}
                alt="Audio"

                className="img-fluid  animated slideInLeft "
                onClick={this.handleClick5}
              />
              <audio className="audio-element5">
                <source src={Audio12Slide11}></source>
              </audio>
              <p>4. Brindar beneficios adecuados a la situación del cliente.</p>
            </Col>
            <Col xs="2">
            <img
                src={arrow4}
                style={{ width: "110px" }}
                alt="arrow4"
                className="img-fluid  animated slideInLeft "
              />
            </Col>
            <Col xs="2">
              {/* <div style={{ display: (this.state.on ? 'block' : 'none') }}>
                puras mamadas
              </div> */}
            
             
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ReactTimeout(TA7View)
