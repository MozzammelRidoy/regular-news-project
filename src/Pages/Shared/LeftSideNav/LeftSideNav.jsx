import { useEffect, useState } from "react";
import Category from "./Category";
import { SlCalender } from "react-icons/sl";
import moment from 'moment';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]); 
    const date = moment().format('MMMM D YYYY'); 

    useEffect(()=>{
        fetch('data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            {/* Category part  */}
                <div>
                <h2 className="text-3xl p-2">All Categories</h2>
                <div className="space-y-6 mt-4">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
                </div>

            {/* sport part  */}
            <div className="py-4 space-y-6">
               <div>
               <Link to={'/'}>
                <div className="space-y-3 mb-4">
                    <img className="mx-auto" src={img1} alt="" />
                    <h2 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </div>
                <div className="flex justify-between items-center">
                    <p>Sports</p>
                    <p className="flex items-center gap-2"><SlCalender /> {date}</p>

                </div></Link>
               </div>
               <div>
               <Link to={'/'}>
                <div className="space-y-3 mb-4">
                    <img className="mx-auto" src={img2} alt="" />
                    <h2 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </div>
                <div className="flex justify-between items-center">
                    <p>Sports</p>
                    <p className="flex items-center gap-2"><SlCalender /> {date}</p>

                </div></Link>
               </div>
               <div>
               <Link to={'/'}>
                <div className="space-y-3 mb-4">
                    <img className="mx-auto" src={img3} alt="" />
                    <h2 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </div>
                <div className="flex justify-between items-center">
                    <p>Sports</p>
                    <p className="flex items-center gap-2"><SlCalender /> {date}</p>

                </div></Link>
               </div>

               <div>
               <Link to={'/'}>
                <div className="space-y-3 mb-4">
                    <img className="mx-auto" src={img1} alt="" />
                    <h2 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </div>
                <div className="flex justify-between items-center">
                    <p>Sports</p>
                    <p className="flex items-center gap-2"><SlCalender /> {date}</p>

                </div></Link>
               </div>



            </div>
        </div>
    );
};

export default LeftSideNav;