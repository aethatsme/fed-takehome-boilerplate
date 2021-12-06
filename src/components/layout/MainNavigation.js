import { Link } from 'react-router-dom';
import logo, { ReactComponent as Logo } from '../../img/logo.svg';

function MainNavigation() {
    return (
        <header className='header'>
            <div className='container'>
            <div className='logo'><Logo /></div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/'>Process</Link>
                    </li>
                    <li>
                        <Link to='/'>Journal</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact Info</Link>
                    </li>
                </ul>    
            </nav>
            </div>
        </header>
    );
}

export default MainNavigation;