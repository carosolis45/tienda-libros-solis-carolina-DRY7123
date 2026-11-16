import { Link, useLocation } from 'react-router';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-[#1e1e1e] border-b border-[#333] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#4caf50] hover:text-white transition-colors">
          📚 Librería Carolina
        </Link>
        <div className="flex gap-6 text-sm">
          <Link to="/" className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-[#4caf50] font-bold' : 'text-gray-400'}`}>
            Inicio
          </Link>
        </div>
      </div>
    </nav>
  );
}