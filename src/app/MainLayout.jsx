import React from "react";
import ManyRequest from "./ManyRequest";
import CurrentForecast from "./CurrentForecast";
import HourlyForecast from "./HourlyForecast";
import TenDayForeCast from "./TenDayForeCast";

function MainLayout({ statusCode }) {
  if (statusCode == 200) {
    return (
      <>
        <CurrentForecast />
        <HourlyForecast />
        <TenDayForeCast />
      </>
    );
  } else {
    return <ManyRequest status={statusCode} />;
  }
}

export default MainLayout;
