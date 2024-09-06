"use client";
import { VscHeart } from "react-icons/vsc";
import { VscBookmark } from "react-icons/vsc";
import { VscCircleSlash } from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";
import { VscFlame } from "react-icons/vsc";
import { VscLiveShare } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscUnlock } from "react-icons/vsc";

export default function Icons() {
  return (
    <div className='flex justify-start gap-5 p-2 text-gray-500'>
      <VscHeart className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100' />
      <VscComment className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-emerald-500 hover:bg-sky-100' />
      <VscBookmark className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100' />
      <VscFlame className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-rose-500 hover:bg-sky-100' />
      <VscTrash className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100' />
      <VscLiveShare className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-green-500 hover:bg-sky-100' />
      <VscCircleSlash className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-rose-100' />
      <VscUnlock className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100' />
    </div>
  );
}