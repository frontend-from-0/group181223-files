import './styles.css';
import {UserContext, UserDispatchContext} from '../../modules/user/UserProvider';
import { useContext } from 'react';


export const Navbar = ({ }) => {
	const user = useContext(UserContext);
	const dispatchUser = useContext(UserDispatchContext);

	const handleSignOutClick = () => {
		dispatchUser({ isLoggedInUser: false });
	};

	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				<li>Home</li>
				{user.isLoggedInUser && <li>Account</li>}
				{user.isLoggedInUser ? (
					<li onClick={handleSignOutClick}>Sign out</li>
				) : (
					<li>Sign in</li>
				)}
			</ul>
		</nav>
	);
};
