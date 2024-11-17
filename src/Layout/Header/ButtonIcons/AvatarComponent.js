import React, { useEffect, useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import '../HeaderComponent.css';
import Dropdown from 'react-bootstrap/Dropdown';
import LogoutButtonComponent from '../LogoutButtonComponent.js';
import { IoPersonCircleOutline } from 'react-icons/io5';
import AuthenticationFooter from '../../../Pages/Authentication/AuthenticationFooter.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme as setThemeInStore } from '../../../ReduxStore/ThemeSlice.js';
//import AuthenticationFooter from '..../Pages/Authentication/AuthenticationFooter.js';

const AvatarComponent = () => { 
  const dispatch = useDispatch();
  const [checkBox, setCheckBox] = useState()
  const storeTheme = useSelector(store=> store.themes)
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

  const handlethemetoggle = (e)=> {
    const isChecked = e.target.checked;
    // //console.log(isChecked);
    setCheckBox(isChecked);
    
    if (isChecked) {
      dispatch(setThemeInStore('dark'));
    } else {
      dispatch(setThemeInStore('light'));
    }
   
  }
  useEffect(()=> {
    const checkBoxStateLocalStorage = JSON.parse(localStorage.getItem('theme'))
    setCheckBox(checkBoxStateLocalStorage);
  }, [])

  return (
    <Dropdown autoClose='outside'>
      <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
        <div >
          <RxAvatar size={24} className='fillColor'/>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>        
          <div style={{display: 'flex', borderBottom: '1px solid  #dee0e1', alignItems: 'center'}}>
            <IoPersonCircleOutline size={36}/>
            <div>
              <div>{localStorage.getItem('name')}</div>
              <div>{localStorage.getItem('email')}</div>
            </div>
          </div>
        
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input onChange={(e)=> handlethemetoggle(e)} checked={checkBox} type='checkbox' className='logoutButtonStyle' />
            <label> Dark Theme</label>
          </div>
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


