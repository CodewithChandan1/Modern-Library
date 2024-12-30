import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">Modern Library</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/authors" className="text-gray-600 hover:text-blue-600">Authors</Link>
          <Link to="/subjects" className="text-gray-600 hover:text-blue-600">Subjects</Link>
          <Link to="/reading-list" className="text-gray-600 hover:text-blue-600">Reading List</Link>
          <Link to="/recent" className="text-gray-600 hover:text-blue-600">Recent Changes</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}