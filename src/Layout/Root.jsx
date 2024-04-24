import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto  font-poppins '>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default Root;