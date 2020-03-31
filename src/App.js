import React, { Fragment, useEffect } from 'react';
import {useRoutes, navigate, useRedirect } from 'hookrouter';
import { useClearCache } from "react-clear-cache";
import preval from 'preval.macro';

import {routes} from './routes';
import { ToLogin } from './constants/config-redirect-url';
import NotFoundPage from './screen/Explore/NotFoundPage';


const App = () => {  

    /*
     -------------------------------
    |                                 |
    | HANDLE ROUTER WITH HOOK ROUTER  |
    |                                 |
      -------------------------------
   */ 
  useRedirect('/', ToLogin);
  const routeResult = useRoutes(routes);

  const { isLatestVersion, emptyCacheStorage, latestVersion } = useClearCache(
    {
      duration: 5000, 
      // auto: true
    }
  );

  useEffect(() => {

    //*
    const elem = document.getElementById('progress');
    
        if (elem) {       
          elem.remove();
        }
              if(isLatestVersion == true){

            console.log("isLatestVersion-1 : ", isLatestVersion);
            console.log("V-",latestVersion)

        } else {

            console.log(`Running emptyCache()` );
            emptyCacheStorage();
        }  
        console.log("Build Date time : ",  preval`module.exports = new Date().toLocaleString();`)

      
  },[])

 

  return (

    routeResult || <NotFoundPage />    
  );

}

export default App;
