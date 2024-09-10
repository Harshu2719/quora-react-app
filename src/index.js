import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import QuestionComponent from './Pages/QuestionComponent';
import {Provider} from 'react-redux';
import store from './ReduxStore/Store';
import Authentication from './Pages/Authentication/Authentication.js';
import RoutingComponent from './RoutingComponent';
import SearchResultPage from './Pages/SearchResultPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerComponent from './Pages/AnswerPage/AnswerComponent.js';
import ProfilePage from './Pages/Profile/ProfilePage.js';
import ComminSoonPage from './Pages/ComminSoonPage.js';



const Index = () => {
  

  //useeffect => check if user is logged in or not
  // if not -> redirect to authentication page
  return (
    <Provider store={store}>
      <RoutingComponent /> 
    </Provider>
  )
}
const router = createBrowserRouter([
  {
      path: '/',
      element: <Index />,
      children: [  
          {
            path: 'home',
            element: <App />
          },
          {
            path: 'question/:key?/:value?',
            element: <QuestionComponent />,      
          },
          {
            path: 'auth',
            element: <Authentication />
          },
          {
            path: '/search/:key?/:value?',
            element: <SearchResultPage />
          },
          {
            path: '/answer',
            element: <AnswerComponent/>
          },
          {
            path: '/profile',
            element: <ProfilePage/>
          },
          {
            path: '/following',
            element: <ComminSoonPage/>
          },
          {
            path: '/Language',
            element: <ComminSoonPage/>
          },
          {
            path: '/spaces',
            element: <ComminSoonPage/>
          },
          {
            path: '/tryQuora',
            element: <ComminSoonPage/>
          },
      ],
  }
])



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


// children: [
      //       //   {
      //       //     path: 'question/:key?/:value?',
      //       //     element: <QuestionComponent />
      //       //   }
      //       // ]