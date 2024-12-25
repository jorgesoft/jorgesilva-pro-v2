import React from "react";

const BlogSection = () => {
  return (
    <div className="py-5">
      <div className="container text-center">
        <h2 className="text-body">My Blog</h2>
        <p className="text-muted">
          Explore my thoughts on cybersecurity, DevSecOps, and cloud security.
        </p>
        <a href="/blog" className="btn btn-primary btn-lg">
          Read My Blog
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
