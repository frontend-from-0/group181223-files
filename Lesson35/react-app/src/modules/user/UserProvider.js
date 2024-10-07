import { createContext, useState } from "react";
import {loggedInUser} from '../../data';

export const UserContext = createContext({});
export const UserDispatchContext = createContext({});


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(loggedInUser);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}



