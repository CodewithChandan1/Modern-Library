import React from 'react';
import { SearchBar } from '../components/home/SearchBar';
import { TrendingBooks } from '../components/home/TrendingBooks';

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Discover Your Next Great Read
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Search millions of books from the Open Library catalog
        </p>
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </section>

      <section className="mb-12">
        <TrendingBooks />
      </section>
    </div>
  );
}