import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { channels } from "../../data/data";
import { Channel } from "./ChannelList/Channel";
import Programming from "./ChannelList/Programming";
import "./css/programming.css"
import { getData } from "../../data/getData";

function BigModal({ show, handleClose }) {
  const [fullscreen, setFullscreen] = useState();
  const [head, setHead] = useState({});

  const [channels, setChannels] = useState([]);

  const handleHead= (name,description,Ihour,Fhour,duration) => {
    setHead({...head,name:name,description:description,inicio:Ihour,Final:Fhour,duration:duration});
  }

  useEffect(() => {
    getData(setChannels)
   
  }, []);

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={handleClose} >
        <Modal.Header style={{ height: "30vh" }} className="bg-black p-2 text-white transparent align-items-start " closeButton>
          <Modal.Title className="fs-1 text-capitalize w-40" >
            {head.name}
          <Modal.Title className="mt-4">
            <div className="fs-6">{head.inicio}hs a {head.Final}hs {head.duration}</div>
            <div className="fs-5">{head.description}</div>
          </Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <Container fluid >
          {channels.map((channel) => (
                  <Row >
                  <Col sm={2} xs={10} className="align-self-center " >
                    <Channel key={channel.id} name={channel.name} number={channel.number} image={channel.image}/>
                  </Col>
                  <Col sm={10} xs={10} className="align-self-center d-flex text-center wrapper">
                  {channel.events.map((program) => (
                    <Programming program={program} onHead={handleHead}/>
                  ))}
                 
                  </Col>
                  
                </Row>
                ))}
            
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BigModal;
