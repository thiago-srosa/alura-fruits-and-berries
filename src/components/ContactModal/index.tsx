import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export const ContactModal = ({ show, onHide }: ModalProps): JSX.Element => {
  return (
    <Modal
      as="dialog"
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title as="header" id="contained-modal-title-vcenter">
          <strong>Get in touch</strong>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body as="main">
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTextArea">
            <Form.Label>Leave your comment</Form.Label>
            <Form.Control as="textarea" placeholder="Enter comment" />
          </Form.Group>
        </Form>

        <footer className="d-flex justify-content-end">
          <Button className="me-4" variant="secondary" onClick={onHide}>
            Close
          </Button>

          <Button variant="" type="submit" className="special-background-color">
            Submit
          </Button>
        </footer>
      </Modal.Body>
    </Modal>
  );
};
