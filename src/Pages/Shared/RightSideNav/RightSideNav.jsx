import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const RightSideNav = () => {
    const {githubLogin, googleLogin, user} = useContext(AuthContext); 

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user); 
        })
    }
    const handleGithubLogin = () => {
            githubLogin()
        .then(result => {
            console.log(result.user); 
        })
    }


    return (
        <div>

            {/* Login part  */}
            <div className={`${user && "hidden"}`} > 
                <div className="p-2 space-y-3 mb-6">
                    <h2 className="text-3xl">Login With</h2>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full"><span className="text-2xl"><FcGoogle /></span>Login With Google</button>
                    <button onClick={handleGithubLogin} className="btn btn-outline w-full"><span className="text-2xl"><FaGithub /></span>Login With Github</button>
                </div>
            </div>

            {/* find us part  */}
            <div>
                <div className="p-2  mb-6">
                    <h2 className="text-3xl mb-2">Find Us On</h2>
                    <Link to={'https://www.facebook.com/MozzammelRidoyAR'}>
                    <button className="flex items-center py-4 ps-2 gap-3 hover:bg-slate-600 border rounded-t-lg w-full"><span className="text-2xl text-blue-700"><FaFacebook /></span>Facebook</button></Link>
                    <button className="flex items-center py-4 ps-2 gap-3 hover:bg-slate-600 border-x w-full"><span className="text-2xl text-blue-400"><FaTwitter /></span>Twitter</button>
                    <button className="flex items-center py-4 ps-2 gap-3 hover:bg-slate-600 border rounded-b-lg w-full"><span className="text-2xl text-orange-500"><FaInstagram /></span>Instagram</button>
                </div>
            </div>

            {/* q zone part  */}
            <div>
                <div className="p-2 space-y-3 mb-6">
                    <h2 className="text-3xl">Q Zone</h2>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>

        {/* amazing news paper part  */}

        <div>
            <div className="text-center p-6 space-y-8 text-white bg-black">
                <h2 className="text-3xl">Create an Amazing Newspaper</h2>
                <p>
                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>
                <button className="btn-outline ms-2 px-5 py-2 text-white bg-red-500">
          Learn More
        </button>
            </div>
        </div>

        </div>
    );
};

export default RightSideNav;