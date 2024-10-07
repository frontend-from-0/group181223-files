import { createContext, useReducer } from "react";
import {loggedInUser} from '../../data';

export const UserContext = createContext({});
export const UserDispatchContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, loggedInUser);


  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatchUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

// const exampleAction = {type: 'SIGN_IN', payload: {username:  'johndoe01', isLoggedInUser: true}};

export const UserActionTypes = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  UPDATE_USER: 'UPDATE_USER'
};

function userReducer (state, action) {
  switch ( action.type) {
    case UserActionTypes.SIGN_IN:
      // In real life, make API request to BACKEND to verify the user
      if (registeredUsers.includes(action.payload.username)) {
        return {username:  action.payload.username, isLoggedInUser: true};
      } else {
        console.error('User is not registered. Tried to log in with ' + action.payload.username + ' username.');
        return {isLoggedInUser: false};
      }
      case UserActionTypes.SIGN_OUT:
        return {isLoggedInUser: false};
      case UserActionTypes.UPDATE_USER:
        // TODO: update UserDetailsForm to use this action
        return {...state, username: action.payload.username};
      default: console.error('Unknown action: ' + action.type);
  }
}

// In real life, you would have a backend that would verify the user and store registered users in a database
const registeredUsers = [
  'johndoe01', 'janedoe02', 'johndoe03', 'janedoe04'
];