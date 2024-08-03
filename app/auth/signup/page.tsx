import InputItem from "@/app/_components/auth/InputItem";
import BookRentAuthHeader from "@/app/_components/BookRentAuthHeader";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <div className='w-[80%] sm:w-[70%] mx-auto'>
        <BookRentAuthHeader />
        <h1 className='mt-5 md:mt-10 text-center md:text-start text-2xl md:text-4xl pb-1 border-b border-b-gray-200'>
          Signup into Book Rent
        </h1>
        <form className='mt-5'>
          <InputItem
            id='email'
            label='Email address'
            name='email'
            type='email'
            required
          />
          <InputItem
            id='password'
            label='Password'
            name='password'
            type='password'
            required
          />
          <InputItem
            id='confirmPassword'
            label='Confirm password'
            name='confirmPassword'
            type='password'
            required
          />
          <InputItem
            id='location'
            label='Location'
            name='location'
            type='text'
            required
          />
          <InputItem
            id='phone'
            label='Phone Number'
            name='phone'
            type='tel'
            required
          />

          <div className='flex items-center me-4 gap-3 mt-3'>
            <input
              id='terms'
              type='checkbox'
              className='size-5 border-gray-300 rounded accent-picton-500'
            />
            <label htmlFor='terms' className='text-md select-none'>
              I accept the Terms and Conditions
            </label>
          </div>

          <div className='mt-10'>
            <button className='w-full py-3 text-center shadow-md shadow-gray-400 bg-picton-500 hover:bg-picton-400 text-white text-lg font-medium rounded-md'>
              Sign Up
            </button>
          </div>
        </form>

        <div className='mt-5 text-center'>
          <p className='text-lg'>
            Already have an account?{" "}
            <Link className='text-picton-400 font-medium' href={"/auth/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
