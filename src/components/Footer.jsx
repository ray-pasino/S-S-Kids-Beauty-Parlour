import React from 'react'
import { Link } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Facebook, Instagram, Twitter, Linkedin, ScissorsIcon} from 'lucide-react'
const Footer = () => {
const currentYear = new Date().getFullYear();
    return (   
      <footer>
          {/* footer top */}
        <div className="max-w-screen-2xl container mx-auto xl:px-28 px-10">
          <div className="mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
            {/* company info */}
            <div className="md:w-[300px]">
              <Link to="/">
              <h2 className="text-xl font-bold">
            S<span className="inline-block align-middle"><ScissorsIcon className="flex items-center  w-8 h-8" /></span>S   
            <br />KID BEAUTY PALOUR</h2>                
            {/* <img src="/logo.svg" alt="" /> */}
              </Link>
              <p className="my-6 text-black/65 font-montserrat">
              There is a distinction between a beauty salon and a hair salon, and although many small businesses do offer both sets of treatments, beauty salons provide extended services related to skin health.
              </p>
              <div className="flex items-center gap-6">
                <Facebook className="w-5 h-5 cursor-pointer" />
                <Twitter className="w-5 h-5 cursor-pointer" />
                <Linkedin className="w-5 h-5 cursor-pointer" />
                <Instagram className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
  
            {/* Catalog */}
            <div>
              <h4 className="font-semibold font-cormorant text-black mb-3">QUICK LINKS</h4>
              <div className="space-y-2">
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-black">
                  About Us
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-black">
                  Services
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-black">
                  Pricing
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-black">
                  Contact Us
                </Link>
                {/* <Link to="/" className="text-sm block hover:text-black">
                  
                </Link> */}
              </div>
            </div>
  
            {/* Additional Links  */}
            <div>
              <h4 className="font-semibold text-black font-cormorant mb-3">ADDITIONAL LINKS</h4>
              <div className="space-y-2">
                <Link to="/" className="text-sm text-gray-400 block hover:text-black">
                  FAQs
                </Link>
                <Link to="/" className="text-sm text-gray-400 block hover:text-black">
                  Testimonials
                </Link>
                <Link to="/" className="text-sm  text-gray-400 block hover:text-black">
                  Catalog
                </Link>
              </div>
            </div>
  
            {/* ABOUT US */}
            <div>
              <h4 className="font-semibold text-black font-cormorant mb-3">ABOUT US</h4>
              <div className="space-y-2">
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-black">
                  Our Employees
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-black">
                  Sitemap
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-black">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        {/* footer bottom */}
        {/* <div>
            <Link to="/" className="flex justify-center items-end">
                    <img src="/images/payment.png" alt="payment methods" className='object-cover'/>
            </Link>
        </div> */}
        <div className='flex flex-col items-center justify-center'> 
            <p className="text-gray-400 text-center py-3">© {currentYear} S<span className="inline-block align-middle"><ScissorsIcon className="flex items-center  w-4 h-4" /></span>S   
            <br />KIDS BEAUTY PALOUR</p>
            <p className='text-gray-400 text-center'>Designed by Francis Ashun & Developed by Hoenyefia Gideon Korbla </p>
        </div>
      </footer>
  )
}

export default Footer