
import { Routes, Route } from 'react-router-dom';
import Details from './pages/details';
import Navbar from "./components/Navbar";
import Home  from './pages/Home';
import {useState} from 'react'
import Two from'./img/two.png'
import One from'./img/one.png'
import Three from'./img/three.png'
import P1 from'./img/p1.png'
import P2 from'./img/p2.png'
import P3 from'./img/three.png'
import Form from './components/form';
import Bookmarks from './pages/Bookmarks';
import { Provider } from 'jotai';

function App() {
 const [datas,setDatas]=useState([ {
     id: 1,
     title: "Understanding React Hooks",
     author: "Alice",
     description: "A deep dive into useState and useEffect.",
     content: "React Hooks are functions that let you use state and other React features without writing a class...",
     createdAt: "2024-07-01T12:00:00Z",
     editedAt: "2024-07-02T08:30:00Z",
     name:"Nebiyu Mushbah",
     date: "July 28th 2025",
     img:One,
     pro:P1
 
   
   },
   {
     id: 2,
     title: "Learning Conditional Rendering",
     author: "Bob",
     description: "Display content dynamically using ternary and &&.",
     content: "Conditional rendering in React allows you to show elements based on certain conditions...",
     createdAt: "2024-07-02T15:45:00Z",
     name:"Abdulaziz Isa",
     img:Two,
     date: "July 2th 2024",
     pro:P2
   },{
     id: 3,
     "title": "Learning Conditional Rendering",
     "author": "mar",
     "description": "Display content dynamically using ternary and &&.",
     "content": "Conditional rendering in React allows you to show elements based on certain conditions...",
     "createdAt": "2024-07-02T15:45:00Z",
     "name":"Emily Carter",
     img:Three,
     date: "Jun 8th 2025",
     pro:P3
   }
   ]
 
   )
     const addPost = (newPost) => {
    setDatas([...datas, newPost]);
  }

  return (
    <>
    <Provider>
       <Navbar addPost={addPost} />
       
       {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home datas={datas} />} />
        < Route path="blog/:id" element={<Details datas={datas} />} />
        <Route path="/form" element={<Form  />} />
         <Route path="/bookmarks" element={<Bookmarks datas={datas} />} />
        {/* <Route path="/Bookmarks" element={<Bookmarks />} /> */}
        {/* <Route path="/blog/:id" element={<BlogDetails posts={posts} />} />
        <Route path="/edit/:id" element={<EditBlog posts={posts} updatePost={updatePost} />} /> */}
      </Routes>
    </Provider>
    </>
  )
}

export default App
