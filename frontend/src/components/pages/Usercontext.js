import { createContext, useContext, useState } from 'react';

const UserContext= createContext();

export const UserProvider=({children})=>
{
    const [User,setUser]= useState({});
    
    const updateUser = (query) => {
        setUser(query);
      };
    return(
        <UserContext.Provider value={{User,updateUser}} >
        {children}
        </UserContext.Provider>
    )


}

export const UserChangeContext=()=>
{
   return useContext(UserContext);
};
