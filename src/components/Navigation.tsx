import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="w-full px-8 py-6 flex items-center fixed top-0 left-0 bg-background/90 backdrop-blur-sm z-50 space-x-8">
      <Link to="/" className="text-lg hover:opacity-70 transition-opacity">
        ebt
      </Link>
      <div className="flex items-center space-x-8">
        <Link 
          to="/project" 
          className={`text-lg hover:opacity-70 transition-opacity ${location.pathname === '/project' ? 'opacity-50' : ''}`}
        >
          project
        </Link>
        <Link 
          to="/about" 
          className={`text-lg hover:opacity-70 transition-opacity ${location.pathname === '/about' ? 'opacity-50' : ''}`}
        >
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;