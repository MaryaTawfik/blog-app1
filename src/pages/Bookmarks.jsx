
import React from 'react';
import { useAtom } from 'jotai';
import { bookmarksAtom } from '../atom';
 import Liked from "../img/liked.png";
// import { useNavigate } from 'react-router-dom';

const Bookmarks = ({ datas }) => {
  const [bookmarks] = useAtom(bookmarksAtom);
  // const navigate = useNavigate();

  
  const bookmarkedBlogs = datas.filter((data) => bookmarks.includes(data.id));

  return (
    <div>
     <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black text-left mb-6 drop-shadow-lg pl-[1em]">
  Your Bookmarks
</h1>




      {bookmarkedBlogs.length > 0 ? (
        bookmarkedBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg p-[1em] m-[1.75em] w-[25.625em] h-auto flex flex-wrap flex-col">
            <header className="flex flex-row justify-between m-[1.5em] pl-4">
              <div className="flex flex-wrap flex-row " >
        <img src={blog.pro} className="rounded-full h-[30px] w-[30px] m-2" />

        <p className="text-gray-600 mt-2 text-[0.9rem]">{blog.name}</p>
        </div>
        <img src={Liked} alt="like LOGO" className="h-[1.5rem] w-[1.5rem]" />
      </header>
      {/* <div className="flex items-center flex-col mt-[2rem] text-gray-800 text-[1rem] w-[30%]"> */}
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <img src={blog.img} />
            <p className="text-gray-600 mb-2"> {blog.content}</p>
            <p className="text-gray-600 mb-2"> {blog.description}</p>
            {/* <button 
              onClick={() => navigate(`/blog/${blog.id}`)} 
              className="text-blue-500 underline"
            >
              View Details
            </button> */}
            </div>
          // </div>
        ))
      ) : (
        <p>No bookmarked blogs.</p>
      )}
    </div>
  );
};

export default Bookmarks;