import React from 'react';

// <TextField
//   {...props}
//   color="primary"
//   aria-haspopup="true"
//   margin="normal"
//   variant="outlined"
//   className={classes.textField}
//   style={props.style}
// >
//   {props.children}
// </TextField>;

const TextFieldInput = props => {
  return (
    <div>
      <label
        for="price"
        class="block text-sm leading-5 font-medium text-gray-700"
      >
        Price
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm sm:leading-5">$</span>
        </div>
        <input
          id="price"
          class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
          placeholder="0.00"
        />
        <div class="absolute inset-y-0 right-0 flex items-center"></div>
      </div>
    </div>
  );
};

export default TextFieldInput;
