import { Link } from 'react-router-dom';
import { Recycle, LayoutDashboard, MapPin, BarChart3 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-emerald-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <Recycle className="h-7 w-7 text-emerald-300" />
            <span>Smart Campus Waste</span>
          </Link>
          <div className="flex space-x-6 text-sm font-medium">
            <Link to="/" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/bins" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <MapPin className="w-4 h-4" />
              <span>Smart Bins</span>
            </Link>
            <Link to="/analytics" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}