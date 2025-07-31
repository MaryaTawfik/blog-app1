import { Link, useLocation } from 'react-router-dom';
import {useState} from "react"
import Form from "./form"

const Navbar = ({addPost}) => {
  const [isformdisplayed,setFormdisplayed]= useState(false)
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/Bookmarks', label: 'Bookmarks' }
    
   
  ];
 
  return (
    <nav className="bg-gray-600 text-white py-4 px-8 flex justify-end items-center">
      
      <div className="flex space-x-6">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`hover:underline ${
              location.pathname === path ? 'font-semibold underline' : ''
            }`}
          >
            {label}
          </Link>
        ))}
        <button onClick={()=>setFormdisplayed(true)}>create blog</button>
      </div>
      {isformdisplayed && <Form addPost={addPost} />}
    </nav>
  );
};

export default Navbar;
