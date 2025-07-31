import React from 'react'
import { useState } from 'react'



const Form = ({addPost}) => {
   const[values,setValues]=useState({
    title:'',
    author:'',
    description:'',
    content:'',
    url:''
  })
  const handleChanges=(e)=>{
    setValues({...values,[e.target.name]:[e.target.value]})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), // Unique ID
      ...values,
      img: values.url, // Assuming img source is the URL input
      pro: values.url // Assuming pro image is the same
    };
    addPost(newPost); // Call the function to add the post
    setValues({ title: '', author: '', description: '', content: '', url: '' }); // Reset form
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            name="title"
    
            className="w-full p-2 border rounded"
            onChange={(e)=>handleChanges(e)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Author:</label>
          <input
            type="text"
           name="author"
            className="w-full p-2 border rounded"
           onChange={(e)=>handleChanges(e)}
           required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <input
            type="text"
            name="description"
            className="w-full p-2 border rounded"
            onChange={(e)=>handleChanges(e)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">profile image:</label>
          <input
            type="text"
            name="url"
            className="w-full p-2 border rounded"
            onChange={(e)=>handleChanges(e)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content:</label>
          <textarea
            name="content"
            className="w-full p-2 border rounded"
            rows="4"
          
            onChange={(e)=>handleChanges(e)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
