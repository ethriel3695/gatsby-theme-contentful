import React from 'react';
import { useBlogData } from '../../hooks/blogData';

const Blog = () => {
  const blog = useBlogData();
  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        {blog.allMdx.nodes &&
          blog.allMdx.nodes.map((article, index) => {
            const date = article.frontmatter.date;

            return (
              <a
                href={`${article.frontmatter.slug}`}
                className="col-span-12 lg:col-span-1 p-3 md:p-6 shadow-lg hover:shadow-2xl rounded-md overflow-hidden cursor-pointer no-underline text-black"
                key={`article-${index}`}
              >
                <h2 key={`title-${index}`}>{article.frontmatter.title}</h2>
                <p key={`description-${index}`} className="py-6">
                  {article.frontmatter.description}
                </p>
                <span key={`date-${index}`}>{`${date ? date : ''}`}</span>
                <div
                  key={`tagsContainer-${index}`}
                  className="grid grid-cols-3 lg:grid-cols-4"
                >
                  {article.frontmatter.categories &&
                    article.frontmatter.categories.map((category, ind) => {
                      return (
                        <p
                          key={`tag-${ind}`}
                          className="shadow-outline border-aqua px-1 mr-2 text-center"
                        >
                          {category}
                        </p>
                      );
                    })}
                </div>
              </a>
            );
          })}

        {blog.allContentfulPage.nodes &&
          blog.allContentfulPage.nodes.map((article, index) => {
            const date = article.createdAt;

            return (
              <a
                href={`${article.slug}`}
                className="col-span-12 lg:col-span-1 p-3 md:p-6 shadow-lg hover:shadow-2xl rounded-md overflow-hidden cursor-pointer no-underline text-black"
                key={`article-${index}`}
              >
                <h2 key={`title-${index}`}>{article.title}</h2>
                <p key={`description-${index}`} className="py-6">
                  {article.description && article.description.description}
                </p>
                <span key={`date-${index}`}>{`${date ? date : ''}`}</span>
                <div
                  key={`tagsContainer-${index}`}
                  className="grid grid-cols-3 lg:grid-cols-4"
                >
                  {article.categories &&
                    article.categories.map((category, ind) => {
                      return (
                        <p
                          key={`tag-${ind}`}
                          className="shadow-outline border-aqua px-1 mr-2 text-center"
                        >
                          {category}
                        </p>
                      );
                    })}
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
