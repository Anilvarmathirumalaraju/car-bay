
import './blogs.css';
import React, { useState } from 'react';
import Blogdata from './blogsdata';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

const Blogs = () => {
  const blogsPerPage = 6; // Number of blogs to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes for displaying blogs based on current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Blogdata.slice(indexOfFirstBlog, indexOfLastBlog);

  // Next page
  const nextPage = () => {
    if (indexOfLastBlog < Blogdata.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="blogs-con">
        <h1>BLOGS</h1>
        <p>
          Your ride's care, our expertise, both tailored true, Car services aplenty, all just for you!
        </p>
        <div className="blog-container">
          {currentBlogs.map((blog, index) => (
            <div key={index} className="blog-item">
              <img src={blog.img} alt={`Blog ${index + 1}`} />
              <div className='relative-content'>
                <h2>{blog.title}</h2>
                <p>{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next and Previous Buttons */}
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
          <ArrowBackIosNewTwoToneIcon />
          </button>
          <button onClick={nextPage} disabled={indexOfLastBlog >= Blogdata.length}>
          <ArrowForwardIosTwoToneIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
