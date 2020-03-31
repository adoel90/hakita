import React, { Fragment, lazy, Suspense } from 'react';
import CircularProgress  from '@material-ui/core/CircularProgress';

/*
    `````````````
    HEADER LAYOUT
  
    `````````````
*/
import Header from './layout/Header';
import HeaderHome from './layout/HeaderHome';

// import ViewSignin from './screen/AM/Signin/ViewSignin';//* Move to Lazy Component
import ViewRegister from './screen/AM/Signup/ViewRegister';
import ViewHome from './screen/AM/Home/ViewHome';

import {   

  ToLogin, ToRegister, ToHome

} from './constants/config-redirect-url';

//*LAZY LOAD
const ViewSignin =  lazy(() => import('./screen/AM/Signin/ViewSignin')) 

export const routes = {
    "/": () => ( 
    
      <div>
     
          <Header />
          <ViewSignin />
      </div>      
    ),
    
    [ToLogin]: () => ( 
  
      <div>
        <Suspense 
          fallback = {
            <CircularProgress size={16} style={{color: 'red'}} />
          }
        >
          <Header />
          <ViewSignin />
        </Suspense>
      </div>
    ),
  
    [ToRegister] : () => (
  
      <Fragment> 
        <Header />
        <ViewRegister />
      </Fragment>
    ),

    [ToHome]: () => ( 
      
      <div>    
          <HeaderHome /> 
          <ViewHome />
      </div>      
    ),
  };
