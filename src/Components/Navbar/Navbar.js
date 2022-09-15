import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
   return(
     <div className='navbar'>
        <div>
            Logo
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/connect' className='nav-touch'>Get In Touch</Link>
            
        </div>
     </div>
   ) 
}

export default Navbar;