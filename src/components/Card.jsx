import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, author, description, content, img, name, pro, id, createdAt }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="transform hover:scale-105 transition duration-300 font-bold"
    >
      <div className="bg-white shadow-md rounded-lg p-4 m-4 w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col">
        <img src={img} alt={title} className="w-full h-auto rounded-md mb-4 object-cover" />

        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{author}</p>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-600 mb-2">{content}</p>

        <footer className="flex items-center mt-4">
          <img src={pro} alt={name} className="rounded-full h-8 w-8 mr-3" />
          <div>
            <p className="text-gray-600 text-sm">{name}</p>
            <p className="text-gray-400 text-xs">Created at: {createdAt}</p>
          </div>
        </footer>
      </div>
    </Link>
  );
};

export default Card;
