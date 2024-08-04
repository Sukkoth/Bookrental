import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className='bg-midnight-950 text-white px-5 py-5'>
        <ul className='flex gap-10 justify-end'>
          <li>
            <Link href={"/dashboard/admin"}>Admin Dashboard</Link>{" "}
          </li>
          <li>
            <Link href={"/auth/login/admin"}>Admin Login</Link>{" "}
          </li>
          <li>
            <Link href={"/auth/login/book-owner"}>Owner Login</Link>
          </li>
          <li>
            <Link href={"/auth/login"}>User Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
