import React, { useState } from 'react'
import SideBarComponent from './SideBarComponent';
import CreateSpacesModal from './CreateSpacesModal';

const Modal = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <SideBarComponent show={show} setShow={setShow} />
        <CreateSpacesModal show={show} setShow={setShow} />
    </div>
  )
}

export default Modal