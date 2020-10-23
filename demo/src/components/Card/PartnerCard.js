import React from 'react';

const PartnerCard = ({ children, ...props }) => {
  // const { title, description, price, files } = section;
  return (
    <div className="col-span-12 md:col-span-1 lg:col-span-1 p-3 md:p-6 mx-3 rounded overflow-hidden shadow-lg text-center bg-white">
      <div className="flex-col content-between">
        <div className="h-full w-full">
          <img
            className="h-full w-full rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
            alt=""
          ></img>
        </div>
        {/* {files.map((file, index) => {
              return (
                <div key={`image-container-${index}`}>
                  {file && <CardImage fluid={file.fluid} />}
                </div>
              );
            })} */}
        <div className="font-bold text-xl mb-5" key={`test-title`}>
          Test
        </div>
        <p
          className="my-4 text-base text-gray-700 whitespace-pre-line"
          key={`test-description`}
        >
          Test Description
        </p>
        <p className="text-gray-700 text-base" key={`Test`}>
          {' '}
          {'Contact Us For Pricing Details'}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
