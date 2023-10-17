import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ExercicioScreen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const frasesAletorias = [
    "Sou o melhor do mundo",
    "Seja você o melhor de si mesmo",
    "Uma janela é uma alma brisada",
  ];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Clique para ser feliz
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Felicidade não se fecha</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {frasesAletorias[Math.floor(Math.random() * frasesAletorias.length)]}
        </Modal.Body>
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
