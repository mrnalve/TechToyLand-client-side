import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(()=>{
    document.title = 'TechToy | Blog'
},[])
  const faqs = [
    {
      question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer: 'An access token and refresh token are commonly used in authentication and authorization systems to grant and manage access to protected resources. An access token is a short-lived credential that authenticates and authorizes access to resources, while a refresh token is a long-lived credential used to obtain new access tokens. Store them securely on the client-side, such as using HTTP-only secure cookies or secure storage mechanisms provided by the operating system in native mobile applications.',
    },
    {
      question: 'Compare SQL and NoSQL databases?',
      answer: 'SQL databases are relational databases that use structured query language (SQL) to define and manipulate data. They have predefined schemas, support transactions, and ensure data consistency. NoSQL databases, on the other hand, are non-relational databases that provide flexible schemas, horizontal scalability, and high-performance handling of unstructured and semi-structured data.',
    },
    {
      question: 'What is express js? What is Nest JS?',
      answer: "Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and tools to build web applications and APIs easily. Express.js is known for its simplicity, lightweight nature, and extensive middleware ecosystem, allowing developers to create server-side applications efficiently. NestJS is a progressive, TypeScript based web application framework that is built on top of Express.js. It provides a structured and modular approach to building scalable and maintainable server-side applications.",
    },
    {
      question: 'What is your return policy?',
      answer: "MongoDB's aggregate method is used to perform advanced operations on collections of documents. It works by applying a sequence of stages to the input documents. Each stage performs a specific operation, such as filtering, grouping, or projecting the data. The result is a transformed set of documents based on the specified operations in the aggregation pipeline.",
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
