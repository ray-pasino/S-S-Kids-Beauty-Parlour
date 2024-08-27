import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Button } from './ui/button';
import { ScissorsIcon } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const toggleSearch = () => {
    //     setIsSearchOpen(!isSearchOpen);
    // };

    const navList = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/About Us" },
        { title: "Our Services", path: "/Services" },
        { title: "Contact", path: "/Contact" },
    ];

    return (
        <header className="px-2 xl:px-24 py-3 bg-transparent text-black overflow-y-hidden">
            <nav className="flex justify-between items-center container md:py-2 pt-6 pb-3">
                <Link to="/" className="">
                <h4 className="text-3xl font-bold tracking-[5px]">
            S<span className="inline-block align-middle"><ScissorsIcon className="flex items-center gap-x-10 w-8 h-8" /></span>S   
            <br /></h4>
            <p className='text-[10px] '>KIDS BEAUTY PALOUR</p>
                </Link>

                <div className="flex items-center gap-8">
                    <ul className="hidden lg:flex items-center gap-8">
                        {navList.map(({ title, path }) => (
                            <li key={title} className="">
                                <NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>
                                    {title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                  <Button className="text-black hover:text-white border border-black w-[150px] mx-auto lg:block">Appointment</Button>
                </div>
                {/* <div className="hidden lg:flex items-center gap-6 ">
                    <Search className="w-4 h-4 cursor-pointer" onClick={toggleSearch} />

                    <Link to="/" className="flex items-center gap-3">
                        <User className="w-4 h-4" />
                    </Link>
                </div> */}

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
                        <li key={title} className="hover:text-orange-500 my-3 cursor-pointer">
                            <Link to={path} onClick={toggleMenu}>
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
