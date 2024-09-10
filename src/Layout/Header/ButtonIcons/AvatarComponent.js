import React from 'react';
import { RxAvatar } from "react-icons/rx";
import '../HeaderComponent.css';
import { Link } from 'react-router-dom';

const AvatarComponent = () => {
  return (
    <div id='widthId'>
        <Link to={'/profile'}><RxAvatar size={26} color='gray'/></Link>
    </div>
  )
}

export default AvatarComponent