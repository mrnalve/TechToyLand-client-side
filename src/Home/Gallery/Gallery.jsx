import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-gray-100 py-10 my-14 rounded-xl">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/g9mwwnG/G1.jpg" alt="Image 1" className="w-full h-52" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/4YyHjrq/G2.jpg" alt="Image 2" className="w-full h-52" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/92GddKM/G3.jpg" alt="Image 3" className="w-full h-52" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/b17TcQB/G4.jpg" alt="Image 4" className="w-full h-52" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/dLWpgDF/G5.jpg" alt="Image 5" className="w-full h-52" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/sVdbS8v/G6.jpg" alt="Image 6" className="w-full h-52" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/9H6MYgQ/G7.jpg" alt="Image 7" className="w-full h-52" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="https://i.ibb.co/NVtk98m/G8.jpg" alt="Image 8" className="w-full h-52" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;










