import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";
const Home = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>

      {/* home main content  */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 space-y-6">
          {/* <h2 className="text-center text-4xl font-poppins ">News Coming Soon...</h2> */}
      
         
          {news.map((aNews) => (
            <NewsCard key={aNews.id} news={aNews}></NewsCard>
          ))}
        </div>
        <div className="bg-slate-800">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
