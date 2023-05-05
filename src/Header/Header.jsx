import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
    return (
        <div className='Header'>
            <Logo />

            <nav className="navbar">
                <a href="#Characters">Characters</a>
                <a href="#Location">Locations</a>
                <a href="#Episode">Episods</a>
                <a href="#MyList">My list</a>


            </nav>


        </div>
    )
}

export default Header;
