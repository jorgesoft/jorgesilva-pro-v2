import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const BlogSection = () => {
  // Query for blog posts
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 10) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  // Get a random post
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  return (
    <div id="my-blog" className="py-5">
      <div className="container text-center">
        <h2 className="text-body">My Blog</h2>
        <p className="text-muted">
          A place where I write guides, thoughts, and things I learn.
        </p>

        {/* Random Blog Post Suggestion */}
        {randomPost && (
          <div className="mt-3">
            <p className="small text-body">
              Check out:{" "}
              <Link to={randomPost.fields.slug} className="text-body">
                {randomPost.frontmatter.title}
              </Link>
            </p>
          </div>
        )}

        {/* Link to Blog Page */}
        
        <Link to="/blog" className="btn btn-primary"> 
          Read My Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
