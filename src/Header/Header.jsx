import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
    return (
        <div className='Header'>
            <Logo />

            <nav className="navbar">
                <a href="">Characters</a>
                <a href="">Locations</a>
                <a href="">Episods</a>
                <a href="">My list</a>


            </nav>


        </div>
    )
}

export default Header;
