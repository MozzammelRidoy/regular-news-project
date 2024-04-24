// import React from 'react';

import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    const {_id} = useParams(); 
    // console.log(_id);
    
    return (

        <div>     
                <Header></Header>
                <Navbar></Navbar>
                <div className="grid md:grid-cols-4">
                    <div className="col-span-3">
                    <h3 className=" text-3xl">News Details Comming Soon...</h3>
                    </div>
                    <div>
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
        </div>
    );
};

export default News;