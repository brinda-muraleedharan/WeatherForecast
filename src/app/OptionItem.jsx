import React from "react";

function OptionItem({ cities }) {
  let getOptions = () => {
    return cities.map((city) => (
      <option className="bg-slate-500 text-zinc-700" key={city.latitude} value={city.latitude+"@@"+city.longitude}>
        {city.name}
      </option>
    ));
  };
  return <>{getOptions()}</>;
}

export default OptionItem;
