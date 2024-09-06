import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Post({ post, id }) {
  return (
    <div className="flex p-3 border-b border-gray-200">
      <img
        src={post?.profileImg}
        alt="user-img"
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <div className="relative group">
              <h4 className="font-bold text-sx truncate">
                {post?.name.slice(0, 15)}...
              </h4>
              <span className="text-xs truncate">@{post?.username}</span>

              <div className="absolute bottom-full mb-2 w-max p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {post?.username}
              </div>
            </div>
          </div>
          <HiDotsHorizontal className="text-sm" />
        </div>

        <Link href={`/posts/${id}`}>
          <p className="text-gray-800 text-sm my-3">{post?.text}</p>
        </Link>
        <Link href={`/posts/${id}`}>
          <img src={post?.image} className="rounded-2xl mr-2 max-w-[70%]" />
        </Link>
      </div>
    </div>
  );
}
