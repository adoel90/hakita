import { useState, useEffect, useCallback } from 'react';

export const useCheckboxHandler = initialState => {

    console.log("initialState : ", initialState);

    const [checkboxes, setCheckbox] = useState(initialState);
    const [idUnique, setIdUnique] = useState();
  
    const handleEventChange = useCallback(({ target: { name, id } }) => {
        
        
      console.log("NAME FROM 'useCheckboxHandler()' : ",name);
      console.log("ID/KEY FROM 'useCheckboxHandler()' : ", id)
   
      setCheckbox(prevState =>
      
        prevState.map(item =>
      
        //   item.name === name ? { ...item, checked: !item.checked } : { ...item }
            item.value === name ? { ...item, checked: !item.value } : { ...item }
          
        )
      );

      setIdUnique(id)

    }, []);
  
    const resetCheckboxValues = useCallback(() => setCheckbox(initialState), [initialState]);
  
    return { 

              handleEventChange,
              resetCheckboxValues,
              checkboxes,
              idUnique

            //   detailCheckboxed
    };
  };


/*

    Referrence : 

    * https://stackoverflow.com/questions/55823296/reactjs-prevstate-in-the-new-usestate-react-hook

    * https://codesandbox.io/s/kmjn5p9667?fontsize=14

    * Medium ==>  https://medium.com/@wlodarczyk_j/handling-multiple-checkboxes-in-react-js-337863fd284e


  */


