import { useState, useContext } from "react"
import './styles.css';
import {UserDispatchContext, UserContext, UserActionTypes} from '../UserProvider';

export const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [loginError, setLoginError] = useState(false);
  const user = useContext(UserContext);
  const dispatchUser = useContext(UserDispatchContext);


  function handleSubmit (event) {
    event.preventDefault();
    // The same as below: dispatchUser({type:'SIGN_IN',payload: {username: username } })
    dispatchUser({type: UserActionTypes.SIGN_IN, payload: {username} });
    if (!user.isLoggedInUser) {
      setLoginError('Username or password is incorrect, try again.');
    }
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit} >
            
      <input  type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      <button type="submit">Sign in</button>
      {loginError && <p>{loginError}</p>}
    </form>
  );
};
