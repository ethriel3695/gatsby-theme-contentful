import React from 'react';
import PartnerCard from './Card/PartnerCard';
import Table from './Table/Table';

const skillsFrontend = [
  {
    name: 'css',
    title: 'CSS',
  },
  {
    name: 'javascript',
    title: 'JavaScript',
  },
  {
    name: 'mobile_apps',
    title: 'Mobile Apps',
  },
];

const skillsBackend = [
  {
    name: 'docker',
    title: 'Docker',
  },
  {
    name: 'aws',
    title: 'AWS',
  },
  {
    name: 'node',
    title: 'Node',
  },
];

const MyPath = ({ children, ...props }) => {
  // const { title, description, price, files } = section;
  {
    /* <div classNameName="bg-gray-200">
      <PartnerCard />
    </div> */
  }
  return (
    <div>
      <h2>Projects</h2>
      <Table />
      <h2>Courses</h2>
      <Table />
      <h2>Current Mentor(s)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-200 p-4 lg:p-8">
        <PartnerCard />
      </div>
    </div>
  );
};

export default MyPath;
