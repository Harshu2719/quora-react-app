import React from 'react';
import LogoComponent from './LogoComponent';
import './HeaderComponent.css';
import AvatarComponent from './ButtonIcons/AvatarComponent';
import TryQuoraComponent from './TryQuoraComponent';
import LanguageComponent from './ButtonIcons/LanguageComponent';
import AddQuestionButton from './AddQuestionButton';
import SearchSubAssembly from './Search/SearchSubAssembly';
import HomeComponent from './ButtonIcons/HomeComponent';
import AnswerButtonComponent from './ButtonIcons/AnswerButtonComponet';
import FollowingComponent from './ButtonIcons/FollowingComponent';
import SpacesComponent from './ButtonIcons/SpacesComponent';


const HeaderComponent = () => {
    
  return (
    <>
    <div className='headerbox1' >
        <div className='headerbox2' >
          <div className='headerbox3' >
            <div className='headerbox3_1' >
              <LogoComponent />
            </div>
            <div className='headerbox3_2' >
              <HomeComponent />
              <FollowingComponent />
              <AnswerButtonComponent/>
              <SpacesComponent />
              <SearchSubAssembly />
              <TryQuoraComponent />
              <AvatarComponent />
              <LanguageComponent />
              <AddQuestionButton />            
            </div>
          </div>     
        </div>
    </div>
    </>
  )
}

export default HeaderComponent;