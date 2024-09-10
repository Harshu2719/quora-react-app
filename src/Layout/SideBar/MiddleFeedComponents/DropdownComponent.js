import Dropdown from 'react-bootstrap/Dropdown';
import DeleteCommentComponent from './DeleteCommentComponent';
import React, { useState } from 'react';

function DropdownComponent({ object, isEditButtonClicked, setIsEditButtonClicked, setRefreshComment }) {
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const handleEditClicked = () => {
    setIsEditButtonClicked(true);
    setRefreshComment(true)
  }
  const handleDeleteButton = () => {
    setDeleteButtonClicked(true)
  }
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  return (
    <Dropdown >
      <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" class="icon_svg-stroke" fill="#666" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleEditClicked()} >edit</Dropdown.Item>
        <Dropdown.Item onClick={() => handleDeleteButton()}><DeleteCommentComponent
            object={object}
            deleteButtonClicked={deleteButtonClicked} setRefreshComment={setRefreshComment} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;