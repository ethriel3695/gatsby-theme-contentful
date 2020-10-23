import React from 'react';
import { saveUser } from '../api/save-user';

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

const Signup = ({ children, ...props }) => {
  const handleSubmit = async event => {
    event.preventDefault();
    const userFormData = new FormData(event.target);
    const userData = Object.fromEntries(userFormData);

    const packageData = {
      skills: [],
      mentor: {
        inWhatFields: [],
      },
      lookingFor: {
        inWhatFields: [],
      },
    };

    let skill = {};

    if (userData) {
      if (userData['first_name'] || userData['last_name']) {
        packageData.name = `${userData['first_name']} ${userData['last_name']}`;
      }

      packageData.imageUrl = userData.imageUrl;

      // add skills
      for (const property in userData) {
        skill = {};
        if (property.indexOf('skill_') > -1) {
          skill[userData[property]] = {
            level: 'beginner',
          };
          packageData.skills.push(skill);
        }
      }

      // add skills level
      for (const property in userData) {
        if (property.indexOf('rate_') > -1) {
          for (let i = 0; i < packageData.skills.length; i++) {
            for (const skillProp in packageData.skills[i]) {
              if (property.indexOf(skillProp) > -1) {
                packageData.skills[i][skillProp].level = userData[property];
              }
            }
          }
        }
      }

      // areas developer is looking for mentoring
      for (const property in userData) {
        if (property.indexOf('mentor_') > -1) {
          packageData.lookingFor.inWhatFields.push(userData[property]);
        }
      }

      // mentor's area of expertise
      for (const property in userData) {
        if (property.indexOf('developer_') > -1) {
          packageData.mentor.inWhatFields.push(userData[property]);
        }
      }

      packageData.mentor.enabled = userData.mentor;
      packageData.lookingFor.enabled = userData.developer;

      const res = await saveUser(packageData);
      console.log(res);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="#">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        name="first_name"
                        className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        name="last_name"
                        className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm leading-5 font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <span className="ml-5 rounded-md shadow-sm">
                        <button
                          type="button"
                          className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                        >
                          Change
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Skills
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Select skills and rate
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <fieldset>
                    <legend className="text-base leading-6 font-medium text-gray-900">
                      Frontend
                    </legend>
                    {skillsFrontend.map((item, i) => {
                      return (
                        <div key={`frontend-${i}`} className="mt-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                name={`skill_${item.name}`}
                                value={item.name}
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-5">
                              <label
                                htmlFor={`skill_${item.name}`}
                                className="font-medium text-gray-700"
                              >
                                {item.title}
                              </label>
                              <p>
                                <span className="text-sm leading-5 font-medium">
                                  Rate your skill:{' '}
                                </span>
                                <input
                                  name={`rate_${item.name}_beginner`}
                                  value="Beginner"
                                  type="radio"
                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                  htmlFor={`rate_${item.name}_beginner`}
                                  className="ml-3 mr-3"
                                >
                                  <span className="text-sm leading-5 font-medium text-gray-700">
                                    Beginner
                                  </span>
                                </label>
                                <input
                                  name={`rate_${item.name}_intermediate`}
                                  value="Intermediate"
                                  type="radio"
                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                  htmlFor={`rate_${item.name}_intermediate`}
                                  className="ml-3 mr-3"
                                >
                                  <span className="text-sm leading-5 font-medium text-gray-700">
                                    Intermediate
                                  </span>
                                </label>
                                <input
                                  name={`rate_${item.name}_expert`}
                                  value="Expert"
                                  type="radio"
                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                  htmlFor={`rate_${item.name}_expert`}
                                  className="ml-3 mr-3"
                                >
                                  <span className="text-sm leading-5 font-medium text-gray-700">
                                    Expert
                                  </span>
                                </label>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </fieldset>
                  <div className="hidden sm:block">
                    <div className="py-5">
                      <div className="border-t border-gray-200"></div>
                    </div>
                  </div>
                  <fieldset>
                    <legend className="text-base leading-6 font-medium text-gray-900">
                      Backend
                    </legend>
                    {skillsBackend.map((item, i) => {
                      return (
                        <div key={`backend-${i}`} className="mt-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                name={`skill_${item.name}`}
                                value={item.name}
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-5">
                              <label
                                htmlFor={`skill_${item.name}`}
                                className="font-medium text-gray-700"
                              >
                                {item.title}
                              </label>
                              <p>
                                <span className="text-sm leading-5 font-medium">
                                  Rate your skill:{' '}
                                </span>
                                <input
                                  name={`rate_${item.name}_beginner`}
                                  value="Beginner"
                                  type="radio"
                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                  htmlFor={`rate_${item.name}_beginner`}
                                  className="ml-3 mr-3"
                                >
                                  <span className="text-sm leading-5 font-medium text-gray-700">
                                    Beginner
                                  </span>
                                </label>
                                <input
                                  name={`rate_${item.name}_intermediate`}
                                  value="Intermediate"
                                  type="radio"
                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                  htmlFor={`rate_${item.name}_intermediate`}
                                  className="ml-3 mr-3"
                                >
                                  <span className="text-sm leading-5 font-medium text-gray-700">
                                    Intermediate
                                  </span>
                                </label>
                                <input
                                  name={`rate_${item.name}_expert`}
                                  value="Expert"
                                  type="radio"
                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                  htmlFor={`rate_${item.name}_expert`}
                                  className="ml-3 mr-3"
                                >
                                  <span className="text-sm leading-5 font-medium text-gray-700">
                                    Expert
                                  </span>
                                </label>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Developer
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Select skills and rate
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <fieldset>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            name="developer"
                            value="true"
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="developer"
                            className="text-lg font-medium text-gray-900"
                          >
                            Developer
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>I am looking for a mentor in these areas:</p>
                    {skillsFrontend.map((item, i) => {
                      return (
                        <div key={`backend-${i}`} className="mt-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                name={`mentor_${item.name}`}
                                value={item.name}
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-5">
                              <label
                                htmlFor={`mentor_${item.name}`}
                                className="font-medium text-gray-700"
                              >
                                {item.title}
                              </label>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {skillsBackend.map((item, i) => {
                      return (
                        <div key={`backend-${i}`} className="mt-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                name={`mentor_${item.name}`}
                                value={item.name}
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-5">
                              <label
                                htmlFor={`mentor_${item.name}`}
                                className="font-medium text-gray-700"
                              >
                                {item.title}
                              </label>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Mentor
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Select skills and rate
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <fieldset>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            name="mentor"
                            value="true"
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="mentor"
                            className="text-lg font-medium text-gray-900"
                          >
                            Mentor
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>I want to mentor in these areas:</p>
                    {skillsFrontend.map((item, i) => {
                      return (
                        <div key={`backend-${i}`} className="mt-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                name={`developer_${item.name}`}
                                value={item.name}
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-5">
                              <label
                                htmlFor={`developer_${item.name}`}
                                className="font-medium text-gray-700"
                              >
                                {item.title}
                              </label>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {skillsBackend.map((item, i) => {
                      return (
                        <div key={`backend-${i}`} className="mt-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                name={`developer_${item.name}`}
                                value={item.name}
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-5">
                              <label
                                htmlFor={`developer_${item.name}`}
                                className="font-medium text-gray-700"
                              >
                                {item.title}
                              </label>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </fieldset>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue focus:bg-indigo-500 active:bg-indigo-600 transition duration-150 ease-in-out">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
