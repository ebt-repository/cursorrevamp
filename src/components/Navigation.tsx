import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="w-full px-8 py-6 flex flex-col items-start fixed top-0 left-0 bg-background/90 backdrop-blur-sm z-50 space-y-8">
      <Link to="/" className="text-lg hover:opacity-70 transition-opacity">
        ebt
      </Link>
      <div className="flex flex-col space-y-4">
        <Link 
          to="/project" 
          className={`hover:opacity-70 transition-opacity ${location.pathname === '/project' ? 'opacity-50' : ''}`}
        >
          project
        </Link>
        <Link 
          to="/about" 
          className={`hover:opacity-70 transition-opacity ${location.pathname === '/about' ? 'opacity-50' : ''}`}
        >
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;