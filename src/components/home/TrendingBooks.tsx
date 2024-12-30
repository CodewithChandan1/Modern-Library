import React from 'react';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { fetchApi } from '../../lib/utils';

interface Book {
  key: string;
  title: string;
  cover_i?: number;
  author_name?: string[];
}

export function TrendingBooks() {
  const { data: books, isLoading } = useQuery('trending-books', () =>
    fetchApi('/trending/daily.json')
  );

  if (isLoading) {
    return <div className="animate-pulse h-64 bg-gray-100 rounded-lg" />;
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Trending Books</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
        }}
        className="w-full"
      >
        {books?.works?.map((book: Book) => (
          <SwiperSlide key={book.key}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/200x300'}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg truncate">{book.title}</h3>
                {book.author_name && (
                  <p className="text-sm text-gray-600">{book.author_name[0]}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}