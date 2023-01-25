import './Header.css'
import {Link} from 'react-router-dom'

function Header (){
    return(

        <header>
        <div>
        <h1> 
            <Link to="/">LOGO</Link>
        {/* <a href="#">LOGO</a> */}
        </h1>
        <nav>
            <ul>
                <li>
                <Link to="/sample01">sample01</Link>
                <ul>
                    <li><Link to="sample01/sub01">sub1</Link></li>
                    <li><Link to="sample01/sub02">sub2</Link></li>
                </ul>
                </li>
                <li><Link to="/sample02">Sample02</Link></li>
                <li> <Link to="/sample03">Sample03</Link></li>
            </ul>
        </nav>
        </div>
        </header>

    )
}


export default Header;