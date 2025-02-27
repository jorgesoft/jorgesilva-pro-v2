import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout>
        <div className="text-center mt-5">
          <p className="fs-4">
            No blog posts found. Add markdown posts to "content/blog".
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mt-5">
        <header className="mb-5 text-center">
          <h1 className="text-body">All Blog Posts</h1>
          <p className="lead text-body">Read all my updates and posts below!</p>
        </header>
        <div className="row">
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const image = getImage(post.frontmatter.featuredImage);

            return (
              <div className="col-md-6 col-lg-4 mb-4" key={post.fields.slug}>
                <div className="card h-100">
                  {image && (
                    <Link to={post.fields.slug} className="text-decoration-none">
                      <GatsbyImage
                        image={image}
                        alt={title}
                        className="card-img-top"
                      />
                    </Link>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={post.fields.slug} className="text-decoration-none">
                        {title}
                      </Link>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {post.frontmatter.date}
                    </h6>
                    <p className="card-text">
                      {post.frontmatter.description || post.excerpt}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-top-0">
                    <Link
                      to={post.fields.slug}
                      className="btn btn-primary btn-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400, aspectRatio: 1.5, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
