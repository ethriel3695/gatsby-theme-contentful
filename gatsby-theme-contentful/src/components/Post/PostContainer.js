import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '../../CodeBlock';

// const Pre = props => (
//   <pre
//     {...props}
//     className="font-mono scrollbar-none text-white bg-gray-800 overflow-auto rounded-md"
//   />
// );
const Code = CodeBlock;

const InlineCode = props => (
  <code {...props} className="font-mono bg-yellow-200 p-1" />
);

const components = {
  // pre: Pre,
  code: Code,
  inlineCode: InlineCode,
};

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
          <h1 className="text-center">{title}</h1>
          {/* <div className="text-md text-center">
            <span>{date}</span>
          </div> */}
        </header>
        <div className="text-left container">
          <MDXProvider components={components}>
            <MDXRenderer>{data}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </div>
  );
}
