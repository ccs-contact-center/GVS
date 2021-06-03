import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row,Spinner } from 'reactstrap'
import audio from '../../assets/img/safelite/audio.png'

class InstruccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Instrucciones</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3" >
            <img
                src={audio}
                //style={{ width: 260 }}
                alt="audio"
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="5" >
              <h2 className="text-justify text-white">
                <p>
                  Cuando encuentres el icono de audio, púlsalo para poder escuchar los audios que preparamos para ti.
              </p>
              </h2>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default InstruccionView
