import { createContext } from "react";
import { useState } from "react";
import React from "react";



export const MyContext = React.createContext(null);

 const Firstcontext = (props) =>


{
    const [state, setstate] = useState('0')
    return(
        
        <MyContext.Provider value={{state,setstate}}>
         {props.children}


    </MyContext.Provider>
    )
}

export default Firstcontext ;
