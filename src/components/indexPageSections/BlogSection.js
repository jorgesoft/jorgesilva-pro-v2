import React from "react";

const BlogSection = () => {
  return (
    <div className="py-5">
      <div className="container text-center">
        <h2 className="text-body">My Blog</h2>
        <p className="text-muted">
          A place where I write guides, thoughts, and things that learn.
        </p>
        <a href="/blog" className="btn btn-primary">
          Read My Blog
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
