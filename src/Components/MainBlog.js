import React from "react";
import BlogJSON from "../DB/BlogList.json";

export const MainBlog = () => {
  const Blogs = BlogJSON;
  return (
    <>
      {Blogs.map((item) => (
        <div className="row py-4 mb-5 g-5">
          <div className="col-7 custom-card">
            <img src={item.photo} className="w-100" alt="Blog Photo" />
          </div>
          <div className="col-5 custom-card">
            <p className="text-secondary my-1">{item.date}</p>
            <p className="display-4 fw-bold">{item.name}</p>
            <p className="text-secondary my-1">{item.description}</p>
          </div>
        </div>
      )).slice(0, 1)}
    </>
  );
};
