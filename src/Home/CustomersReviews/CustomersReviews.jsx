import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4.5,
      review: "Great product! I'm amazed by the quality and features of the electronic tech toy. Highly recommended!",
      image: "https://example.com/images/john.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      review: "Absolutely love this toy! It exceeded my expectations. The interactive features are fantastic.",
      image: "https://example.com/images/jane.jpg",
    },
    {
      id: 3,
      name: "David Johnson",
      rating: 4,
      review: "The electronic tech toy is a lot of fun! My kids enjoy playing with it for hours. Good purchase!",
      image: "https://example.com/images/david.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2">
                <img src={review.image} alt={review.name} className="w-8 h-8 rounded-full" />
                <div className="flex items-center ml-2">
                  <span className="text-yellow-500">{review.rating}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0l6 18H4l6-18zm0 0l-6 18h12l-6-18zm-1.239 8.048l-.588-1.813L5 7.397l1.94-1.412L8.333 3l.555 1.985L10 7l1.112-1.015L13.06 3l1.392 2.985L15 7.397l-2.173.838-.588 1.813L10 8.476zM10 15.313l-3.531 2.156 1.032-3.563L3.75 9.876l3.625-.282L10 6l1.625 3.594 3.625.282-2.75 2.031 1.032 3.563L10 15.312z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold ml-2">{review.name}</h3>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
