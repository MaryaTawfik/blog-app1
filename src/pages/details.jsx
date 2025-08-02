import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atom";

import Pen from "../img/Pen.png";
import Del from "../img/del.png";
import Like from "../img/like.png";

const Details = ({ datas }) => {
  const { id } = useParams();
  const [dat, setDat] = useState(null);
  
  const [bookmarks] = useAtom(bookmarksAtom); 
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    const found = datas.find((b) => b.id === Number(id)); 
    setDat(found);
    console.log("Found Data:", found);
  }, [id, datas]);

  const handleBookmark = () => {
    if (bookmarks.includes(dat.id)) {
      alert("It's already added.");
    } else {
     
      setBookmark((currentbookmarks) => [...currentbookmarks, dat]);
      console.log(bookmark);
      
      alert("Added to bookmarks!");
    }
  };

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmark));
  }, [bookmark]);

  if (!dat)
    return <p className="text-center py-10 text-gray-500">Post not found.</p>;

  return (
    <div>
      <header className="flex flex-row justify-between m-[1.5em] pl-4">
        <div className="flex flex-row ">
          <img src={dat.pro} className="rounded-full h-[30px] w-[30px] m-2" />
          <div className="flex flex-col ">
            <p className="text-gray-600 mt-1 text-[0.9rem]">{dat.name}</p>
            <p className="text-gray-500 text-[0.5rem]">posted on {dat.date}</p>
          </div>
        </div>
        <div className="flex flex-row p-4 gap-4">
          <button
            onClick={handleBookmark}
            className=" hover:bg-gray-500 text-white rounded  transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <img src={Like} alt="like LOGO" className="h-[1.5rem] w-[1.5rem]" />
          </button>
          
          <button  className=" hover:bg-gray-500 text-white rounded  transform hover:scale-110 transition duration-300 ease-in-out">
            <Link to={`/edit/${dat.id}`}>
              <img src={Pen} alt="pen LOGO" className="h-[1.5rem] w-[1.5rem]" />
            </Link>
          </button>

          
        </div>
      </header>
      <div className="flex items-center flex-col mt-[2rem] text-gray-800 text-[1rem]">
        <h2 className="text-xl font-bold mb-[1.5em]">{dat.title}</h2>
        <img src={dat.img} className="w-[50%]" />
        <p className="text-gray-600 mb-2 pt-3">Author: {dat.author}</p>
        <p className="text-gray-600 mb-2 mt-1">
          Description: {dat.description}
        </p>
        <p className="text-gray-600 mb-2 mt-1">Content: {dat.content}</p>
        <div className="mt-[2%]">
          
       <Link 
  to="/" 
  className="bg-gray-500  text-gray-200 hover:text-white hover:bg-opacity-60 px-4 py-2 rounded flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"
>
  <span className="text-white text-lg">←</span> Back
</Link>





          
        </div>
      </div>
    </div>
  );
};

export default Details;
