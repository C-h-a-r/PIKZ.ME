import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-4 py-4 md:px-8 bg-zinc-800/80 backdrop-blur-xl border-b border-zinc-700/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Replace with logo NavLink or just logo if needed */}
        <NavLink to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 521.55 464.72"
            className="h-8 w-8 fill-white"
          >
            <path d="M7.45 13.93c45.55 31.57 82.8 57.39 128.14 88.82 1.11.77 2.48 1.04 3.79.73 36.67-8.64 118.82-21.92 199 19.75l45.22 23.57c2.74 1.43 2.91 5.28.31 6.94l-92.43 59.23c-45.46-6.78-92.87-11.61-142.13-13.95-5.31-.25-10.59-.47-15.86-.66-2.2 89.28-7.82 164.91-10.03 254.19-.01.58-.46 12.68-.22 12.16 63.75-138.15 78.54-177.57 78.54-177.57 11.68-3 54.64-6.83 82.93-12.04 6.88-.15 27.28-4.97 54.21-9.5 1.36-.23 2.69-.71 3.87-1.42 57.81-34.71 115.62-69.43 173.43-104.14 7.25-4.35 7.07-14.93-.33-19.02-60.97-33.76-121.93-67.51-182.9-101.27-1.24-.69-2.61-1.13-4.02-1.3C221.83 25.66 114.69 12.86 7.55.05c-8.33-.99-11.62 12.15-.09 13.88Z" />
          </svg>
        </NavLink>

        <div className="flex space-x-6">
          {['Home', 'Wiki', 'Discord'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
