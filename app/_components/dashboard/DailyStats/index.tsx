import React from "react";
import Header from "./Header";
import IncomeCard from "./IncomeCard";

export default function DailyStats() {
  return (
    <div className='bg-white w-1/4 p-5 rounded-md'>
      <Header />
      <div className='mt-8'>
        <IncomeCard />
      </div>
    </div>
  );
}
