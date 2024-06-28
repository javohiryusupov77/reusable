import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <div className="text-6xl font-bold mb-4">404</div>
      <div className="text-2xl mb-8">Page Not Found</div>
      <p className="text-lg mb-8 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-white hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg transition-colors duration-300"
      >
        Go Back Home
      </Link>
      <div className="mt-8 text-sm text-gray-300">
        You can also&nbsp;
        <a
          href="#"
          className="underline hover:text-gray-400 transition-colors duration-300"
        >
          contact support
        </a>
        &nbsp;if you need immediate assistance.
      </div>
    </div>
  );
};

export default NotFoundPage;
