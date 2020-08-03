import React from 'react';
import Button from '../Button/Button';

export const MultipleCTASection = ({ section }) => {
  const { callToAction } = section;
  return (
    <div key={`multipleCTA`}>
      {callToAction &&
        callToAction.map((cta, index) => {
          return (
            <span key={`buttonSection-${index}`}>
              {cta.externalLink ? (
                <Button key={`${cta.title}-${index}`} href={cta.externalLink}>
                  {cta.buttonText}
                </Button>
              ) : (
                <Button key={`${cta.title}-${index}`} to={cta.slug}>
                  {cta.buttonText}
                </Button>
              )}
            </span>
          );
        })}
    </div>
  );
};
