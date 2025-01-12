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
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center text-body">My Blog</h2>
        <p className="text-center text-muted">
          A place where I write guides, thoughts, and things I learn.
        </p>

        {/* Random Blog Post Suggestion */}
        {randomPost && (
          <div className="mt-4 text-center">
            <p className="small text-body">
              Check out:{" "}
              <Link to={randomPost.fields.slug} className="text-body fw-bold">
                {randomPost.frontmatter.title}
              </Link>
            </p>
          </div>
        )}

        {/* Button to Blog Page */}
        <div className="text-center mt-4">
          <Link to="/blog" className="btn btn-primary">
            Read My Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
