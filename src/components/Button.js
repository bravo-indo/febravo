/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ label, isPrimary, to, ...rest }) {
  return (
    <div>
      {isPrimary ? (
        <Link {...rest}
          to={to}
          className="rounded-md py-3 px-4 bg-purple-800 text-white border-2 border-purple-800 font-semibold"
        >
          {label}
        </Link>
      ) : (
        <Link {...rest}
          to={to}
          className="rounded-md py-3 px-4 border-2 border-purple-800 text-purple-800 font-semibold bg-white"
        >
          {label}
        </Link>
      )}
    </div>
  );
}

export default Button;
