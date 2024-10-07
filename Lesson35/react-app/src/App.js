import { List } from './modules/todo/List';
import { Navbar } from './components/Navbar';
import './App.css';
import { useContext } from 'react';
import {UserContext} from './modules/user/UserProvider';
import { SignInForm } from './modules/user/SignInForm';

export const App = () => {
	const user = useContext(UserContext);


	return (
		<div className='container'>
			<Navbar />
			{!user.isLoggedInUser && 
			<>
				<p>You must log in before using the application!</p>
				<SignInForm  />
			</>
			}
			{user.isLoggedInUser && <h2>{user.username}</h2>}
			{user.isLoggedInUser && <List />}
		</div>
	);
};
