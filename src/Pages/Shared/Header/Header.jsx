// import logo from '../../../assets/logo.png'
import moment from 'moment';
import BrackingNews from '../../Home/BrakingNews/BrackingNews';

const Header = () => {
    const dateTime = moment().format('dddd, MMMM D YYYY'); 
    return (
        <div className='text-center my-4 space-y-2'>
            <h2 className='text-6xl'>Regular News Project</h2>
            <p>Journalism Without Fear or Favour</p>
            <p>{dateTime}</p>
            <BrackingNews></BrackingNews>
        </div>
    );
};

export default Header;