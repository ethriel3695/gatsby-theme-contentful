import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import TextOnlyCard from '../Card/TextOnlyCard';
import Button from '../Button/Button';

const HeroLanding = ({ page }) => {
  return (
    <div className="bg-gray-0">
      <div>
        <div>
          {page.section.map((sect, index) => {
            return (
              <div key={index}>
                {sect.image ? (
                  <div className="max-w-full">
                    <Image fluid={sect.image.fluid} />
                  </div>
                ) : null}
                <div className="container">
                  <h2 className="text-left p-8" key={`${sect.title}`}>
                    {sect.title}
                  </h2>
                  {sect.description && (
                    <p className="text-lg text-gray-800 text-left mb-2">
                      {documentToReactComponents(
                        sect.description.json
                        // , {
                        // renderNode: {
                        //   [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                        //     <img
                        //       src={`${node.data.target.fields.file['en-US'].url}?w=300`}
                        //       src={node.data.target.fields.title['en-US']}
                        //     />
                        //   ),
                        // },
                        // }
                      )}
                    </p>
                  )}
                  <div className="text-center text-xl">
                    {sect.item &&
                      sect.item.map((sec, index) => {
                        return (
                          <Button key={`${sec.title}-${index}`}>
                            {sec.link ? (
                              <a
                                className={' no-underline'}
                                href={sec.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {sec.title}
                              </a>
                            ) : (
                              <Link
                                className={' no-underline'}
                                to={`/${sec.slug}`}
                              >
                                {sec.title}
                              </Link>
                            )}
                          </Button>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
