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
          <h1 style={{ textAlign: 'center' }}>{title}</h1>
          <div style={{ textAlign: 'center' }}>
            <span>{date}</span>
          </div>
        </header>
        <div style={{ textAlign: 'justify', padding: 20 }}>
          <MDXRenderer>{data}</MDXRenderer>
        </div>
      </article>
    </div>
  );
}
