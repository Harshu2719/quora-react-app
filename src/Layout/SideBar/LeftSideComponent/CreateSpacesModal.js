import {react, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateSpacesModal({show, setShow}) {
  const handleClose = () => {
    setShow(false);
}
  return (
    <>
    {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Space</Modal.Title>
          <br></br>
          <div>Share your interests, curate content, host discussions, and more.</div>
        </Modal.Header>
        <Modal.Body>
            <div className='modaldiv1'>
                <div>
                    <div>Name</div>
                    <p>This can be changed in Space settings.</p>
                </div>
                <div>
                    <input />
                </div>
                <div>
                    <p>message about your space name.</p>
                </div>
                <div>
                    <div>
                        <h5>Brief description</h5>
                        <p>Include a few keywords to show people what to expect if they join</p>
                    </div>
                    <input />
                </div>  
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateSpacesModal;

/* */ 
