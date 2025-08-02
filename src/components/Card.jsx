import React from "react";
import { Link } from "react-router-dom";



const Card = ({ title, author, description, content,img,name,pro,id ,createdAt}) => {
  return (
    <Link to={`/blog/${id}`} className="transform hover:scale-105 transition duration-300 font-bold ">
    <div className="bg-white shadow-md rounded-lg p-[1em] m-[1.75em] w-[25.625em] h-auto flex flex-wrap flex-col">
<img src={img} />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2"> {author}</p>
      <p className="text-gray-600 mb-2"> {description}</p>
      <p className="text-gray-600 mb-2"> {content}</p>
      
      <footer className="flex flex-wrap flex-row ">
        <img src={pro} className="rounded-full h-[30px] w-[30px] m-2" />
<div className="flex flex-wrap flex-col ">
        <p className="text-gray-600 mt-2 text-[0.9rem]">{name} </p>
        <p className="text-gray-600  text-[0.6rem]">createdAt: {createdAt}</p>
</div>
      </footer>
      
        
      
    </div>
     </Link>
  );
};

export default Card;
