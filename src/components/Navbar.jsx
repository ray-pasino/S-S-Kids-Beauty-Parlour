import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'; // Import from react-scroll
import { Button } from './ui/button';
import { ScissorsIcon } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navList = [
        { title: "Home", path: "home" },
        { title: "About Us", path: "about" },
        { title: "Our Services", path: "services" },
        { title: "Contact", path: "contact" },
    ];

    return (
        <header className="px-2 xl:px-24 py-3 bg-transparent text-black">
            <nav className="flex justify-between items-center container md:py-2 pt-6 pb-3">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                    <h4 className="text-3xl font-bold tracking-[5px]">
                        S<span className="inline-block align-middle"><ScissorsIcon className="flex items-center gap-x-10 w-8 h-8" /></span>S   
                        <br /></h4>
                    <p className='text-[10px]'>KIDS BEAUTY PALOUR</p>
                </Link>

                <div className="flex items-center gap-8">
                    <ul className="hidden lg:flex items-center gap-8">
                        {navList.map(({ title, path }) => (
                            <li key={title} className="">
                                <Link 
                                    to={path}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer"
                                    activeClass="active"
                                    spy={true} // Highlights the link when the section is in view
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                  <Button className="hidden text-black hover:text-white border border-black w-[150px] mx-auto lg:block">Appointment</Button>
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </nav>
 
            {/* Mobile sidebar menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white transition-transform duration-300 ease-in-out transform z-40 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="text-center p-10 flex flex-col gap-4">
                    {navList.map(({ title, path }) => (
                        <li key={title} className="my-3 cursor-pointer">
                            <Link 
                                to={path}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
