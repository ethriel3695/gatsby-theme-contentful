import React from 'react';
import Button from '../Button/Button';

export default function SendFoxSignupForm() {
  <div className="container mt-10">
    <h2 className="text-center py-8" key={`what!`}>
      Start Creating
    </h2>

    <form
      method="post"
      action="https://sendfox.com/form/104zrv/10r8en"
      className="sendfox-form"
      id="10r8en"
      data-async="true"
    >
      <p>
        <input
          type="text"
          className="w-full form-input p-3 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
          placeholder="First Name"
          name="first_name"
          required
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full form-input p-3 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
          required
        />
      </p>
      <p>
        <label>
          <input type="checkbox" name="gdpr" value="1" required /> I agree to
          receive email updates and promotions.
        </label>
      </p>
      <div aria-hidden="true" className="display-none">
        <input
          type="text"
          name="a_password"
          tabindex="-1"
          value=""
          autocomplete="off"
        />
      </div>
      <p>
        <Button
          className="w-full p-3 bg-primary rounded-md hover:bg-primary"
          type="submit"
        >
          Yes Please!
        </Button>
      </p>
    </form>
  </div>;
}
