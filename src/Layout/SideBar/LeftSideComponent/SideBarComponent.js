import react from 'react';
import './SideBarComponent.css';

const SideBarComponent = ({show, setShow}) => {
    const handleShow = () => {setShow(true)};

    return (
        <div className = 'sidebarOptions'>
            <div className='sidebar' onClick={handleShow}>
                <div className='createSpaceStyle'> 
                    <div>+</div>
                    <button  className='createText'>Create Space</button> 
                </div>   
            </div>
            <div className='sidebar'>
                <img src='https://qph.cf2.quoracdn.net/main-thumb-ti-2256-50-letkpfgwqvevkiucpspnxpsmiwmdwcca.jpeg' alt='' />
                <p className='text'>History</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Business</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Psychology</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Cooking</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Music</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Science</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Health</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Movies</p>
            </div>
            <div className='sidebar'>
                <img src='https://www.quora.com/topic/Technology' alt='' />
                <p className='text'>Technology</p>
            </div>
            <div className='sidebar'>
                <img src='' alt='' />
                <p className='text'>Education</p>
            </div>
            {/* <div className='sidebar'>
                <Add />
                <p className='text'>Discover Spaces</p>
            </div> */}
        </div>
    )
}
export default SideBarComponent ; 