import React from "react";

function Button({ label, isPrimary }) {
  return (
    <div>
      {isPrimary ? (
        <button className="rounded-md py-2 px-4 bg-purple-800 text-white border-2 border-purple-800 font-bold">
          {label}
        </button>
      ) : (
        <button className="rounded-md py-2 px-4 border-2 border-purple-800 text-purple-800 font-bold bg-white">
          {label}
        </button>
      )}
    </div>
  );
}

export default Button;
