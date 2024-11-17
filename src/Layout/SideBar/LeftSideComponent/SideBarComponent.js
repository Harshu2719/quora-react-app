import react from 'react';
import './SideBarComponent.css';
import { Link } from 'react-router-dom';
import AuthenticationFooter from '../../../Pages/Authentication/AuthenticationFooter';

const SideBarComponent = ({show, setShow}) => {
    const handleShow = () => {setShow(true)};

    return (
        <div className = 'sidebarOptions'>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebarCreateSpace '>
                <div className='createSpaceStyle'> 
                    <div className='plusStyle'>+</div>
                    <button  className='createText'>Create Space</button> 
                </div>   
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img className='imgStyle'  src='https://qph.cf2.quoracdn.net/main-thumb-ti-2256-50-letkpfgwqvevkiucpspnxpsmiwmdwcca.jpeg' alt='' />
                <p className='text'>History</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='https://qph.cf2.quoracdn.net/main-thumb-t-1056-100-hPoilc51jNiGKb8dbh4plI8jOw6MJ7pG.jpeg' alt='' />
                <p className='text'>Books</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='	https://qph.cf2.quoracdn.net/main-thumb-t-11851-100-U7XdsVMcZUAhAw8lEyGJDxwbslgalJAc.jpeg' alt='' />
                <p className='text'>Knowledge</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='	https://qph.cf2.quoracdn.net/main-thumb-t-1393740-100-tjtbwiqofezszbgbqrtunqerutuchpmn.jpeg' alt='' />
                <p className='text'>Technology</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='	https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg' alt='' />
                <p className='text'>Music</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='	https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg' alt='' />
                <p className='text'>Science</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='	https://qph.cf2.quoracdn.net/main-thumb-ti-1609844-50-mnnmjzouktqsrdsleyzpiypvyjhdiixl.jpeg' alt='' />
                <p className='text'>Health</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='https://qph.cf2.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg' alt='' />
                <p className='text'>Movies</p>
            </div></Link>
            <Link to={'/coming-soon'} style={{textDecoration: 'none'}}><div className='sidebar'>
                <img src='https://qph.cf2.quoracdn.net/main-thumb-t-1394227-100-lnxbuflwjrfcrgnmlzvedbdnecjbgoaj.jpeg' alt='' />
                <p className='text'>Education</p>
            </div></Link>
            <div style={{width: '130px'}}><AuthenticationFooter /></div>
        </div>
    )
}
export default SideBarComponent ; 