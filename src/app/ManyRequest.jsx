import React from "react";

function ManyRequest() {
  return (
    <div className="w-full p-20">
      <h1 className="flex justify-center bg-gradient-to-r from-red-800 via-indigo-700 to-red-800 inline-block text-transparent bg-clip-text font-bold text-5xl">
        Oops !!! 429
      </h1>
      <p className="p-3">
        The request limit for this resource has been reached for the current
        rate limit window. Wait and retry the operation, or examine your API
        request volume.
      </p>
    </div>
  );
}

export default ManyRequest;
