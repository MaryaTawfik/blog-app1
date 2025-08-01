import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import Form from "./form";

const Navbar = ({ addPost }) => {
  const [isFormDisplayed, setFormDisplayed] = useState(false);
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/Bookmarks', label: 'Bookmarks' }
  ];

  return (
    <nav className="relative bg-gray-600 text-white py-4 px-8 flex justify-end items-center">
      <div className="flex space-x-6">
        {navItems.map(({ path, label }) => (
          <Link key={path} to={path} className={`hover:underline ${location.pathname === path ? 'font-semibold underline' : ''}`}>
            {label}
          </Link>
        ))}
        <button onClick={() => setFormDisplayed(true)}>Create Blog</button>
      </div>

      {/* Form as a pop-up */}
      {isFormDisplayed && (
  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
    <div className=" p-6 rounded shadow-lg w-full max-w-md mx-auto">
 
      <Form addPost={addPost} closeForm={() => setFormDisplayed(false)} />
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;