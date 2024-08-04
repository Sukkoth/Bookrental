import React from "react";
import Header from "./Header";
import IncomeCard from "./IncomeCard";
import AvailableBooks from "../admin/AvailableBooks";

export default function DailyStats() {
  return (
    <div className='bg-white p-5 rounded-xl shadow-lg shadow-gray-100'>
      <Header />
      <div className='pt-8'>
        <IncomeCard />
        <div className='pt-5'>
          <AvailableBooks />
        </div>
      </div>
    </div>
  );
}
