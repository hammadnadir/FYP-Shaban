import React, { useState } from "react";



const SEARCH_CONTEXT=React.createContext();



export const PROVIDER=({children})=>{

  const [search,setSearch]=useState("");
  
  const [trip,setTrip]=useState({
     destination:"",
     date:""
  })
  

  return  (
        <SEARCH_CONTEXT.Provider value={{search,setSearch}}>
      {children}
    </SEARCH_CONTEXT.Provider>
  )
}


export default SEARCH_CONTEXT