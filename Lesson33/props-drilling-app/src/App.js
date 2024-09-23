import { List } from './components/List';
import { Navbar } from './components/Navbar';
import './App.css';

export const App = () => {
	// const loggedInUser = {
	//   isLoggedInUser: true,
	//   username: "johndoe01"
	// };
	// const loggedOutUser = {
	//   isLoggedInUser: false
	// };

	return (
		<div className='container'>
      <Navbar />
			<div className='app'>
				<List />
			</div>
		</div>
	);
};
