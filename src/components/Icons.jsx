"use client";
import { VscHeart } from "react-icons/vsc";
import { VscBookmark } from "react-icons/vsc";
import { VscCircleSlash } from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";
import { VscFlame } from "react-icons/vsc";
import { VscLiveShare } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscUnlock } from "react-icons/vsc";

import {
  getFirestore,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  serverTimestamp
} from "firebase/firestore";
import {app} from "../firebase"
import { signIn, useSession } from "next-auth/react";
import { useEffect,useState } from "react";

export default function Icons({ id }) {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  //   data base
  const db = getFirestore(app);
  const likePost = async () => {
    if (session) {
      if (isLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
          username: session.user.username,
          timestamp: serverTimestamp(),
        });
      }
    } else {
      signIn();
    }
  };
  //   for every time likes
  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db]);

  useEffect(() => {
    setIsLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  return (
    <div className="flex justify-start gap-5 p-2 text-gray-500">
      <div className="flex items-center">
        {isLiked ? (
          <VscHeart
            onClick={likePost}
            className="h-8 w-8 cursor-pointer rounded-full  transition text-red-600 duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100"
          />
        ) : (
          <VscHeart
            onClick={likePost}
            className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100"
          />
        )}
        {likes.length > 0 && (
          <span className={`text-xs ${isLiked && "text-red-600"}`}>
            {likes.length}
          </span>
        )}
      </div>
      <VscComment className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-emerald-500 hover:bg-sky-100" />
      <VscBookmark className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />
      <VscFlame className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-rose-500 hover:bg-sky-100" />
      <VscTrash className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100" />
      <VscLiveShare className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-green-500 hover:bg-sky-100" />
      <VscCircleSlash className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-rose-100" />
      <VscUnlock className="h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />
    </div>
  );
}
