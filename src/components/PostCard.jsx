import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full  transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-orange-600 hover:text-white pb-4">
        <div className="w-full justify-center items-center max-h-35 mb-5 overflow-hidden">
          <img
            src={appwriteService.getFileView(featuredimage)}
            alt={title}
            className=""
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
