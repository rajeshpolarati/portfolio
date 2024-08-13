import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";

const BLOGS_QUERY = gql`
  query Publication($host: String) {
    publication(host: $host) {
      posts(first: 50) {
        edges {
          node {
            title
            brief
            url
            coverImage {
              url
            }
            publishedAt
          }
        }
        totalDocuments
      }
    }
  }
`;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const client = new GraphQLClient("https://gql.hashnode.com");

      const variables = {
        host: "rajeshpolarati.hashnode.dev",
      };

      try {
        const data = await client.request(BLOGS_QUERY, variables);
        setBlogs(data.publication.posts.edges.map((edge) => edge.node));
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="rounded-md shadow-xl border-b-4 w-full max-w-[300px] border-b-indigo-500 dark:text-darkgreyBg  sm:max-w-full"
        >
          {blog.coverImage && (
            <img
              src={blog.coverImage.url}
              alt={blog.title}
              className="rounded-t"
            />
          )}
          <div className="rounded-b p-2">
            <a
              href={blog.url}
              target="blank"
              className="blog_title font-apercu dark:text-white "
            >
              {blog.title}
            </a>
            <p className="">{blog.brief}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
