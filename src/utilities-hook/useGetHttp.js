import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetHttp = (url, dependencies) => {

  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  const userToken = localStorage.getItem('userToken');

  useEffect(() => {

    const abortController = new AbortController();
    const signal = abortController.signal;
    setIsLoading(true);

    const header =  {     

        'Accept': "application/json",
        'Content-Type' : "application/json",
        'Authorization' : "bearer " + userToken,
    };

    axios.defaults.headers.common = header;    
        
    axios
        .get(url, { signal: signal })
        .then(function(response){
            // console.log("Response Original : ", response)
            setFetchedData(response.data.data);
            
        })
        .catch(function(error){
            
            console.log("Error : ", error.response)
            // setFetchedData(error.response);
            setIsLoading(false);
        })

        //CLEAN UP
        return function cleanup() {
          abortController.abort();
        };

  }, dependencies);

  return [isLoading, fetchedData, setFetchedData];

};