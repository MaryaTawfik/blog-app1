
import EditPost from './components/EditPost';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/details';
import Navbar from "./components/Navbar";
import Home  from './pages/Home';
import {useState,useEffect} from 'react'
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
 const [datas, setDatas] = useState(() => {
  const saved = localStorage.getItem("blogPosts");
  return saved ? JSON.parse(saved) : [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "Alice",
      description: "A deep dive into useState and useEffect.",
      content: "React Hooks are functions that let you use state and other React features without writing a class...",
      createdAt: "2024-07-01T12:00:00Z",
      editedAt: "2024-07-02T08:30:00Z",
      name: "Nebiyu Mushbah",
      
      img: One,
      pro: P1
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
    
     pro:P2
   },{
     id: 3,
     "title": "Learning Conditional Rendering",
     "author": "mar",
     "description": "Display content dynamically using ternary and &&.",
     "content": "Conditional rendering in React allows you to show elements based on certain conditions...",
     "createdAt": "2024-07-02T15:45:00Z",
     name:"Emily Carter",
     
     img:Three,
    
     
     pro:P3
   }
   ]
 
   })
   ;
   const [bookmarkedPosts, setBookmarkedPosts] = useState(() => {
  const saved = localStorage.getItem("bookmarks");
  return saved ? JSON.parse(saved) : [];
});

     const addPost = (newPost) => {
    setDatas([...datas, newPost]);
  }
  const updatePost = (updatedPost) => {
  setDatas(datas.map(post => (post.id === updatedPost.id ? updatedPost : post)));
};

   useEffect(() => {
  localStorage.setItem("blogPosts", JSON.stringify(datas));
}, [datas]);

useEffect(() => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkedPosts));
}, [bookmarkedPosts]);





  return (
    <>
    <Provider>
       <Navbar addPost={addPost} />
       
       {/* <Home /> */}
      {/* <Routes> */}
<Routes>
  <Route path="/" element={<Home datas={datas} />} />
  <Route path="blog/:id" element={<Details datas={datas} />} />
  <Route path="/edit/:id" element={<EditPost datas={datas} updatePost={updatePost} />} />
  <Route path="/bookmarks" element={<Bookmarks datas={datas} />} />
</Routes>
        {/* <Route path="/Bookmarks" element={<Bookmarks />} /> */}
        {/* <Route path="/blog/:id" element={<BlogDetails posts={posts} />} />
        <Route path="/edit/:id" element={<EditBlog posts={posts} updatePost={updatePost} />} /> */}
      {/* </Routes> */}
    </Provider>
    </>
  )
}

export default App
