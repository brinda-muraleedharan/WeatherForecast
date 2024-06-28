"use client";
import React, { useEffect, useState } from "react";
import OptionItem from "./OptionItem";
import { useDispatch } from "react-redux";
import { changeLocation } from "./location";

function Navigation() {
    useEffect(()=>{
        fetchCities();
    },[]);
    const dispatch=useDispatch();
    const [cities,setCities]=useState([]);
    let assignLocation=(location)=>{
        let coordinates=location.split("@@")
        dispatch(changeLocation({
                longitude:coordinates[1],
                latitude:coordinates[0]
            
        }))
    }
  async function fetchCities() {
    const myHeaders = new Headers({
      "X-Api-Key": "RraOW0xY+njXl1pNZLkHmw==gOAgKkwRwegk26zI",
    });
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const res = await fetch(
      "https://api.api-ninjas.com/v1/city?country=US&limit=30",
      requestOptions
    );
    if (!res.ok) {
      console.log(res.statusText);
    }
    const t = await res.json();

    await console.log(t);
    await setCities(t);
    await dispatch(changeLocation({
      longitude:t[0].longitude,
      latitude:t[0].latitude
  
}))
  }
  return (
    <div className="flex w-full rounded bg-white">
      <select className="py-3 px-4 pe-9 block w-full border-x-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" onChange={(e)=>assignLocation(e.target.value)}>
        <OptionItem cities={cities}/>
      </select>
    </div>
  );
}

export default Navigation;
