import { List } from './components/List';
import { Navbar } from './components/Navbar';
import './App.css';

export const App = () => {
	return (
		<div className='container'>
      <Navbar />
			<div className='app'>
				<List />
			</div>
		</div>
	);
};
