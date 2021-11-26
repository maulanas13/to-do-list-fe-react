import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function ModalTask({
  toggle,
  isOpen,
  title,
  body,
  handleDo,
  doSomething,
  handleClose,
}) {
  const [closeModal, setCloseModal] = useState(false);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleDo}>
          {doSomething}
        </Button>{" "}
        <Button onClick={handleClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalTask;
