import DailyStats from "@/app/_components/dashboard/DailyStats";
import React from "react";

function page() {
  return (
    <div>
      {/* stats */}
      <DailyStats />
      {/* right side */}
      <div>
        {/* book status */}
        <div></div>
        {/* earning summary */}
        <div></div>
      </div>
    </div>
  );
}

export default page;
