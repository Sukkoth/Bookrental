import Content from "@/app/_components/dashboard/admin/Content";
import DailyStats from "@/app/_components/dashboard/DailyStats";
import Loading from "./loading";

function page() {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-5 h-full'>
      {/* stats */}
      <DailyStats />
      {/* right side */}
      <Content />
    </div>
  );
}

export default page;
