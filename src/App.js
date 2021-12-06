import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MainNavigation from './components/layout/MainNavigation';
import MainFooter from './components/layout/MainFooter';

import './App.scss';

function App() {
	return (
		<div className='app'>
			<MainNavigation />
			<Route path='/'>
				<MainPage />
			</Route>
			<MainFooter />
		</div>
	);
}

export default App;
