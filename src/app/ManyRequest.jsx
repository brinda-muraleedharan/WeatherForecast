import React from "react";

function ManyRequest({ status }) {
  const message =
    status == 429
      ? "The request limit for this resource has been reached for the current rate limit window. Wait and retry the operation, or examine your API request volume."
      : "The entries provided as location were not valid Please try again!!";
  return (
    <div className="w-full p-20">
      <h1 className="flex justify-center bg-gradient-to-r from-red-800 via-indigo-700 to-red-800 inline-block text-transparent bg-clip-text font-bold text-xl sm:text-5xl">
        Oops !!! {status}
      </h1>
      <p className="p-3">{message}</p>
    </div>
  );
}

export default ManyRequest;
