import React from 'react';

const Input = ({...props}) => {
    return (
      <input
        className="flex w-full text-sm pl-2 border-black border rounded-md rounded-l-none mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300 border-l-0
        "
        {...props}
      />
    );
}

export default Input;
