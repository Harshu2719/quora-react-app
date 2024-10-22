import React from 'react';
import { RxAvatar } from "react-icons/rx";
import '../HeaderComponent.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import LogoutButtonComponent from '../LogoutButtonComponent.js';
import { IoPersonCircleOutline } from 'react-icons/io5';
import AuthenticationFooter from '../../../Pages/Authentication/AuthenticationFooter.js';
//import AuthenticationFooter from '..../Pages/Authentication/AuthenticationFooter.js';

const AvatarComponent = () => {
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
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
        <div >
          <RxAvatar size={24} color='gray'/>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >
          <div style={{display: 'flex', borderBottom: '1px solid  #dee0e1', alignItems: 'center'}}>
            <IoPersonCircleOutline size={36}/>
            <div>
              <div>{localStorage.getItem('name')}</div>
              <div>{localStorage.getItem('email')}</div>
            </div>
          </div>
          
                     
        </Dropdown.Item>
        <Dropdown.Item >
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type='checkbox' className='logoutButtonStyle' />
            <label> Dark Theme</label>
          </div>
        </Dropdown.Item>
        <Dropdown.Item >
          <div style={{display: 'flex', justifyContent: 'center'}}><LogoutButtonComponent /></div> 
        </Dropdown.Item>
        <Dropdown.Item >
          <div style={{width: '180px'}} ><AuthenticationFooter /></div> 
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default AvatarComponent;


