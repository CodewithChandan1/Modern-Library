import React from 'react';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-600">
              Modern Library is powered by Open Library, a project of the Internet Archive, a 501(c)(3) non-profit.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/subjects" className="text-gray-600 hover:text-blue-600">Subjects</a></li>
              <li><a href="/authors" className="text-gray-600 hover:text-blue-600">Authors</a></li>
              <li><a href="/recent" className="text-gray-600 hover:text-blue-600">Recent Changes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-gray-600 hover:text-blue-600">Help Center</a></li>
              <li><a href="/contribute" className="text-gray-600 hover:text-blue-600">Contribute</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/openlibrary" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/internetarchive/openlibrary" className="text-gray-600 hover:text-blue-600">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Modern Library. Data from Open Library.</p>
        </div>
      </div>
    </footer>
  );
}