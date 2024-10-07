import './styles.css';
import {UserContext, UserDispatchContext, UserActionTypes} from '../../modules/user/UserProvider';
import { useContext } from 'react';


export const Navbar = () => {
	const user = useContext(UserContext);
	const dispatchUser = useContext(UserDispatchContext);

	const handleSignOutClick = () => {
		dispatchUser({ type: UserActionTypes.SIGN_OUT});
	};

	const handleSignInClick = () => {
		// When we learn react router, replace with actual SignIn page
		dispatchUser({
			type: UserActionTypes.SIGN_IN,
			payload: {
				username: 'johndoe01',
			}
		});
	};

	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				<li>Home</li>
				{user.isLoggedInUser && <li>Account</li>}
				{user.isLoggedInUser ? (
					<li onClick={handleSignOutClick}>Sign out</li>
				) : (
					<li onClick={handleSignInClick}>Sign in</li>
				)}
			</ul>
		</nav>
	);
};
