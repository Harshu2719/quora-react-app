
import './App.css';
import HeaderComponent from './Layout/Header/HeaderComponent.js';
import { useSelector } from 'react-redux';
import HomePage from './Pages/HomePage/HomePage.js';


function App() {
  const isAuth = useSelector(store => store.userInfo.isAuthenticated)
  console.log(isAuth);
 
  return (
  <>
    <HeaderComponent />
    <HomePage />
   </>
  );
}

export default App;
