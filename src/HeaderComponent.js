import React from 'react';
import HomeComponent from './HomeComponent';
import LogoComponent from './LogoComponent';
import FollowingComponent from './FollowingComponent';
import AnswerComponent from './AnswerComponent';
import SpacesComponent from './SpacesComponent';
import SearchComponent from './SearchComponent';
import AvatarComponent from './AvatarComponent';
import TryQuoraComponent from './TryQuoraComponent';
import LanguageComponent from './LanguageComponent';
import FeedComponent from './FeedComponent';
import Authentication from './Authentication';

const HeaderComponent = () => {
    const styleHeader = {
        boxSizing: 'border-box',
        maxWidth: '1100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        // backgroundColor: 'lightGray',
        height: '100%'
    }
  return (
    <>
    <Authentication />
    {/* <div style={{ position: 'fixed', height: '51px', width: '100%', borderBottom: '1px solid #dee0e1'}}>
        <div style={styleHeader}>
          <div style={{boxSizing: 'borderBox', display: 'flex', width: '100%',  height: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{marginRight: '60px'}}><LogoComponent /></div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <HomeComponent />
              <FollowingComponent />
              <AnswerComponent />
              <SpacesComponent />
              <SearchComponent />
              <TryQuoraComponent />
              <AvatarComponent />
              <LanguageComponent />
            </div>
          </div>     
        </div>
    </div>
    <FeedComponent /> */}
    </>
  )
}

export default HeaderComponent;