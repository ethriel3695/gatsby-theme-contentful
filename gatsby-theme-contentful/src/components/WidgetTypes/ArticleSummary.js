import React from 'react';
import { useArticleData } from '../../hooks/articleData';

const ArticleSummary = () => {
  const articles = useArticleData();
  return (
    <div className="container">
      <h1>Articles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        {articles.allMdx.nodes &&
          articles.allMdx.nodes.map((article, index) => {
            const date = article.frontmatter.date;

            return (
              <a
                href={`${article.frontmatter.slug}`}
                className="col-span-12 lg:col-span-1 p-3 md:p-6 shadow-lg hover:shadow-2xl rounded-md overflow-hidden cursor-pointer no-underline text-black"
                key={`article-${index}`}
              >
                <h3 key={`title-${index}`}>{article.frontmatter.title}</h3>
                <span
                  key={`author-bio-${index}`}
                  className="font-semibold text-normal"
                >{`Written by ${article.frontmatter.author} on ${date ||
                  ''}`}</span>
                <p key={`description-${index}`} className="leading-normal">
                  {article.frontmatter.description}
                </p>
              </a>
            );
          })}

        {articles.allContentfulPage.nodes &&
          articles.allContentfulPage.nodes.map((article, index) => {
            const date = article.createdAt;

            return (
              <a
                href={`${article.slug}`}
                className="col-span-12 lg:col-span-1 p-3 md:p-6 shadow-lg hover:shadow-2xl rounded-md overflow-hidden cursor-pointer no-underline text-black"
                key={`article-${index}`}
              >
                <h2 key={`title-${index}`}>{article.title}</h2>
                <span
                  key={`author-bio-${index}`}
                  className="font-semibold text-normal"
                >{`Written by ${article.author} on ${date || ''}`}</span>
                <p key={`description-${index}`} className="leading-normal">
                  {article.description && article.description.description}
                </p>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ArticleSummary;
