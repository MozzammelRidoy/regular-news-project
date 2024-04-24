// import React from 'react';

import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {name, id} = category; 
        return (
        <div className="ps-6 hover:font-bold font-xl">
            <Link to={`/category/${id}`}>
            {name}
            </Link>
        </div>
    );
};

export default Category;