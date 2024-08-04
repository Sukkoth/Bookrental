import { BiSearch } from "react-icons/bi";
import BooksTable from "../../BooksTable";

function BookStatus() {
  return (
    <div className='bg-white w-full p-5 rounded-xl h-3/5 shadow-lg shadow-gray-100 pt-10 overflow-hidden'>
      {/* top options */}
      <div className='flex items-center gap-3 float-end'>
        <BiSearch />
        <BiSearch />
        <BiSearch />
        <BiSearch />
        <BiSearch />
      </div>
      {/* header */}

      <h3 className='font-medium'>Live Book Status</h3>

      {/* table */}
      <BooksTable />
    </div>
  );
}

export default BookStatus;
