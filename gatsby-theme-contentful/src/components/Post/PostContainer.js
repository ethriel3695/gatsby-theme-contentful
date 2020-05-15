import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function PostContainer({ data, frontmatter }) {
  const { banner, title, date, showBanner } = frontmatter;

  return (
    <div className="post-single-container">
      <article className="post-single">
        <header>
          {banner && showBanner ? (
            <Img
              fluid={banner.sharp.fluid}
              alt={title}
              style={{ height: '70vh', textAlign: 'center' }}
            />
          ) : null}
          <h1 className="text-3xl text-center">{title}</h1>
          <div className="text-md text-center">
            <span>{date}</span>
          </div>
        </header>
        <div className="text-justify p-3">
          <MDXRenderer>{data}</MDXRenderer>
        </div>
      </article>
    </div>
  );
}
