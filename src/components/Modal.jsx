import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function ModalTask({ toggle, isOpen, title, body, handle, doSomething }) {
  const [closeModal, setCloseModal] = useState(false);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handle}>
          {doSomething}
        </Button>{" "}
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalTask;
