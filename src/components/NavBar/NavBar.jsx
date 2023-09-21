import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import PropTypes from 'prop-types';




const NavBar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/blog/:id', name: 'Blog Post', id: 'blog-post' },
      ];
      

    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-yellow-300 p-6">
           <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
            }
           
           </div>

           <ul className={`md:flex duration-1000 absolute z-10 md:static
           ${open? 'top-12': '-top-60'}
           bg-yellow-100`}>
           {
                routes.map(route => <Link key={route.id} routex={route}></Link>)
                
            }
            
           </ul>
        </nav>
    );
};

// NavBar.propTypes = {
//     HiMenuAlt2:PropTypes.func 
// }
export default NavBar;