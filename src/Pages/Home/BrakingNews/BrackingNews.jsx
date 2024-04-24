import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrackingNews = () => {
  return (
    <div className="bg-gray-700 py-3 text-xl">
      <div className="flex items-center">
        <button className="btn-outline ms-2 px-5 py-2 text-white bg-red-500">
          Latest
        </button>
        <Marquee pauseOnHover={true} speed={100}>
          <Link className="ml-12" to={"/"}>
            I can be a React component, multiple React components, or just some
            text....
          </Link>
          <Link className="ml-12" to={"/"}>
            I can be a React component, multiple React components, or just some
            text....
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BrackingNews;
