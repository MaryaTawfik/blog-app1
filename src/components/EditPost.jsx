
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = ({ datas, updatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    author: '',
    description: '',
    content: '',
    url: ''
  });

  useEffect(() => {
    const post = datas.find((data) => data.id.toString() === id);
    if (post) {
      setValues({
        title: post.title,
        author: post.author,
        description: post.description,
        content: post.content,
        url: post.img 
      });
    }
  }, [id, datas]);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: Number(id),
      ...values,
      img: values.url,
      pro: values.url
    };
    updatePost(updatedPost);
    navigate(`/blog/${id}`); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border-2 border-gray-700 rounded-lg shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-2xl mb-6 font-semibold text-center">📝 Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Title:</label>
          <input
            type="text"
            name="title"
            value={values.title}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400"
            onChange={handleChanges}
            required
          />
        </div>
        <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Author:</label>
        <input
          type="text"
          name="author"
          value={values.author}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400"
          onChange={handleChanges}
          required
        />
      </div>
        <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Description:</label>
        <input
          type="text"
          name="description"
          value={values.description}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400"
          onChange={handleChanges}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Content:</label>
        <textarea
          name="content"
          value={values.content}
          className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-400"
          rows="4"
          onChange={handleChanges}
          required
        />
      </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;