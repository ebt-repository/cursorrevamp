import { useState } from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center md:justify-end p-2 md:p-4">
      <img
        src="/images/home.jpg" // We'll need to add this image to public/images/
        alt="Black gloved hand pointing at transparent container"
        className="max-h-[90vh] w-auto object-contain px-2 md:pr-4 md:pl-0"
      />
    </div>
  );
};

export default Home; 