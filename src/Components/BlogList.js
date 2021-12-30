import React from "react";
import BlogJSON from "../DB/BlogList.json";

export const BlogList = () => {
  const Blogs = BlogJSON;

  return (
    <div className="row py-4 mb-5 g-5">
      {Blogs.map((item) => (
        <div className="col-4">
          <div className="custom-card">
            <img src={item.photo} className="w-100" alt="Blog Photo" />
            <p className="text-secondary my-2">{item.date}</p>
            <p className="h3">{item.name}</p>
            <p className="text-secondary my-2">{item.description}</p>
          </div>
        </div>
      )).slice(1, Blogs.length)}
    </div>
  );
};
