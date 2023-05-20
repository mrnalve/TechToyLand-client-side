import React from 'react';

const Blog = () => {
  const faqs = [
    {
      question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer: 'An access token and refresh token are commonly used in authentication and authorization systems to grant and manage access to protected resources',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team by emailing support@example.com or calling 123-456-7890.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to select countries. Please check our shipping policy for more information.',
    },
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows you to return products within 30 days of purchase. Please refer to our return policy page for detailed instructions.',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
