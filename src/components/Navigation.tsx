import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50">
      <div className="flex gap-6 text-sm">
        <Link 
          to="/" 
          className={isActive('/') ? 'text-black' : 'text-gray-500 hover:text-black'}
        >
          ebt
        </Link>
        <Link 
          to="/project" 
          className={isActive('/project') ? 'text-gray-500' : 'text-black hover:text-gray-500'}
        >
          project
        </Link>
        <Link 
          to="/about" 
          className={isActive('/about') ? 'text-gray-500' : 'text-black hover:text-gray-500'}
        >
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;