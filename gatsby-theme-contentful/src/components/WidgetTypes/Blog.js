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
            const date = new Date(article.frontmatter.date);
            return (
              <a
                href={`${article.frontmatter.slug}`}
                className="col-span-12 lg:col-span-1 p-3 md:p-6 shadow-lg hover:shadow-2xl rounded-md overflow-hidden cursor-pointer no-underline text-black"
                key={`article-${index}`}
              >
                <h2>{article.frontmatter.title}</h2>
                <p className="py-6">{article.frontmatter.description}</p>
                <span>{`${date}`}</span>
                <div className="grid grid-cols-3 lg:grid-cols-6">
                  {article.frontmatter.categories &&
                    article.frontmatter.categories.map(category => {
                      return (
                        <p className="shadow-outline border-aqua px-1 mr-2 text-center">
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
