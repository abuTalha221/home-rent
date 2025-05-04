import React from 'react';
import Logo from '../../assets/logo.png';
import { FaCaretDown, FaCaretRight} from 'react-icons/fa6';


const menu = [
  { id: 1, 
    name: "Home",
  link: "#"
  },
  { id: 2,
    name: "About",
    link: "/#"
  },
  { id:3,
    name: "Services",
    link: "/#"
  },
  {
    id: 3,
    name: "Pricing",
    link: "/#"
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/#"
  }

]

const DropdownLinks = [
  {
    id: 1,
    name: "All Properties",
    link: "/#",
  },
  {
    id: 2,
    name: "Dhaka Division",
    link: "/#",
  },
  {
    id: 3,
    name: "Chittagong Division",
    link: "/#",
  },
  {
    id: 4,
    name: "Khulna Division",
    link: "/#",
  },
  {
    id: 5,
    name: "Rajshahi Division",
    link: "/#",
  },
  {
    id: 6,
    name: "Barisal Division",
    link: "/#",
  },
  {
    id: 7,
    name: "Sylhet Division",
    link: "/#",
  },
  {
    id: 8,
    name: "Rangpur Division",
    link: "/#",
  },
  {
    id: 9,
    name: "Mymensingh Division",
    link: "/#",
  },
]

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white  duration-200 relative z-40">
      <div className="relative mx-auto flex justify-between items-center py-0 px-2 md:px-20 lg:px-32">
        
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-[100px] h-[100px] object-contain" />

        {/* Navigation Links */}
        <div className='flex justify-center'>
        <ul className='sm:flex hidden intems-center gap-4 py-2'>
          {menu.map((data) => (
            <li key = {data.id} >
              <a href={data.link}
              className='inline-block px-4
              hover:text-[#EC733B] hover:underline underline-offset-8 transition duration-200 ease-in-out'>{data.name}</a>
            </li>
          ))}

            <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] hover:text-[#EC733B] duration-200'>
              Property Lists
              <span>
                <FaCaretDown className='transition-all 
                duration-200
                group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden
            group-hover:block w-[200px] rounded-md bg-white
            p-2 text-black shadow-md'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key = {data.id}>
                    <a href={data.link}
                    className="inline-block w-full rounded-md p-2
                    hover:bg-[#EC733B]/20 ">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </li>
        </ul>
    </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="text-[#EC733B] px-6 py-2 border-2 border-[#EC733B] rounded-lg hover:bg-[#EC733B] hover:text-white transition duration-200 ease-in-out">
            Login/Register
          </button>
          <button className="text-white bg-[#EC733B] px-6 py-2 border-2 border-[#EC733B] rounded-lg transform transition duration-300 ease-in-out hover:translate-x-2">
            Find House
          </button>
        </div>

        {/* Hamburger Menu Button (for mobile) */}
        <div className="md:hidden flex items-center">
          <button id="menu-btn" className="text-[#EC733B] focus:outline-none">
            <i className="fas fa-bars text-2xl"></i> {/* FontAwesome hamburger icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
