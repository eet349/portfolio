import './App.css';
import Footer from './Footer';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import LeftSider from './LeftSider';
import Nav from './Nav';
import RightSider from './RightSider';
import { Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<div className='App'>
			<Nav />
			<LeftSider />
			<Switch>
				<Route exact path='/' component={Home} />
				{/* <Home /> */}
				{/* </Route> */}
				<Route path='/resume' component={Resume} />
				{/* <Resume /> */}
				{/* </Route> */}
				<Route path='/portfolio' component={Portfolio} />
				{/* <Portfolio /> */}
				{/* </Route> */}
				<Route path='/contact' component={Contact} />
				{/* <Contact /> */}
				{/* </Route> */}
				<Route path='/about' component={About} />
				{/* <About /> */}
				{/* </Route> */}
			</Switch>
			<RightSider />
			<Footer />
		</div>
	);
};

export default App;
