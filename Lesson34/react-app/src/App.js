import { List } from './components/List';
import { Navbar } from './components/Navbar';
import './App.css';
import { loggedInUser } from './data';
import { useState } from 'react';

export const App = () => {
	 const [user, setUser] = useState(loggedInUser);

	return (
		<div className='container'>
			<Navbar isLoggedInUser={user.isLoggedInUser} updateUser={setUser} />
			{user.isLoggedInUser && <List />}
		</div>
	);
};
