import React, { useEffect, useState } from 'react';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    fetch('https://tech-toy-land-server-side.vercel.app/review')
    .then(res=>res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <section className="bg-gray-100 py-8 my-4 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div key={review._id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2">
                <img src={review.photoURL} alt={review.displayName} className="w-8 h-8 rounded-full" />
                <div className="flex items-center ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0l6 18H4l6-18zm0 0l-6 18h12l-6-18zm-1.239 8.048l-.588-1.813L5 7.397l1.94-1.412L8.333 3l.555 1.985L10 7l1.112-1.015L13.06 3l1.392 2.985L15 7.397l-2.173.838-.588 1.813L10 8.476zM10 15.313l-3.531 2.156 1.032-3.563L3.75 9.876l3.625-.282L10 6l1.625 3.594 3.625.282-2.75 2.031 1.032 3.563L10 15.312z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold ml-2">{review.displayName}</h3>
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
