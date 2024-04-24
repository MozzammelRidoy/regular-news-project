// import React from 'react';

import { Link } from "react-router-dom";
// import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ news }) => {
//   console.log(news);
  const { title, _id, image_url, rating, total_view, details } = news;
  return (
    <div>
      <div className="p-2 space-y-3">
        <h2 className="font-bold text-xl">{title}</h2>
        <img src={image_url} alt="" />
        <p>
          {details.length > 150 ? (
            <p>
              {details.slice(0, 150)}
              <Link className="text-red-500" to={`/news/${_id}`}>
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details} </p>
          )}
        </p>
        <div className="flex justify-between items-center ">
          <p className="flex items-center gap-1">
            {/* <FaStar /> <FaStar /><FaStar /><FaStar /> <FaRegStarHalfStroke /> */}
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="ms-2">{rating.number}</span>
          </p>
          <p className="flex items-center">
            <IoEye />

            <span className="ms-2"> {total_view}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
