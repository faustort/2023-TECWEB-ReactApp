import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ExercicioScreen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Clique para ser feliz
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Felicidade não se fecha</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seja você quem for, seja feliz!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Achei brega, fecha
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Podemos salvar sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
