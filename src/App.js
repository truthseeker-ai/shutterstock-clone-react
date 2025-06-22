import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RelatedKeywords from './components/RelatedKeywords';
import MainImageSection from './components/MainImageSection';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with logo, nav, icons, login */}
      <Header />

      {/* Search bar with dropdown and search button */}
      <SearchBar />

      {/* Related keywords tags */}
      <RelatedKeywords />

      {/* Main image section with purchase options and hover overlays */}
      <MainImageSection />

      {/* Image galleries: similar images, recommended, more from artist */}
      <ImageGallery />

      {/* Footer with company info, legal, social icons */}
      <Footer />
    </div>
  );
}

export default App;
