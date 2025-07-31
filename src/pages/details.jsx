import { useParams } from "react-router-dom";
import Home from "./Home";
import { useState, useEffect } from "react";
import Pen from "../img/Pen.png";
import Del from "../img/del.png";
import Like from "../img/like.png";

const Details = ({ datas }) => {
  const { id } = useParams();

  const [dat, setDat] = useState(null);

  useEffect(() => {
    const found = datas.find((b) => b.id.toString() === id);
    // console.log("found blog: ", found);
    setDat(found);
  }, [id, datas]);
  // const postIndex = parseInt(id, 10);
  // const post = datas[postIndex];
  if (!dat)
    return <p className="text-center py-10 text-gray-500">Post not found.</p>;
  return (
    <div>
      <header className="flex flex-row justify-between m-[1.5em] pl-4">
        <div className="flex flex-row ">
          <img src={dat.pro} className="rounded-full h-[30px] w-[30px] m-2" />
          <div className="flex flex-col ">
            <p className="text-gray-600 mt-1 text-[0.9rem]">{dat.name} </p>
            <p className="text-gray-500  text-[0.5rem]">
              {" "}
              posted on {dat.date}{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row p-4 gap-4">
          <img src={Like} alt="like LOGO" className=" h-[1.5rem] w-[1.5rem]" />
          <img src={Pen} alt="pen LOGO" className=" h-[1.5rem] w-[1.5rem]" />
          <img src={Del} alt="delete LOGO" className=" h-[1.5rem] w-[1.5rem]" />
        </div>
      </header>
      <div className="flex items-center flex-col mt-[2rem] text-gray-800 text-[1rem]">
        <h2 className="text-xl font-bold mb-[1.5em]">{dat.title}</h2>
        <img src={dat.img} className="w-[50%] " />

        <p className="text-gray-600 mb-2  pt-3">Author: {dat.author}</p>
        <p className="text-gray-600 mb-2  mt-1">
          Description: {dat.description}
        </p>
        <p className="text-gray-600 mb-2  mt-1">Content: {dat.content}</p>
        <div className="mt-[2%] ">
          <button className="bg-gray-400 text-white font-semibold py-2 px-4 mr-2 rounded opacity-50 w-[7rem] transform hover:scale-105 transition duration-300">
            bookmark
          </button>
          
          <button className="bg-gray-400 text-white font-semibold py-2 px-4   rounded opacity-60 w-[7rem] transform hover:scale-105 transition duration-300">
            back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
