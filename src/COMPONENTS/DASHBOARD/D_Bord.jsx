import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Resources/nav-logo-png.png"
import { FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdBookmarkAdd, MdEmail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { ImSpoonKnife } from "react-icons/im";
import { RiMenuFold2Line } from "react-icons/ri";
import UseAdmin from "../../Hooks/UseAdmin";
import {
  FaBookmark,
  FaCalendar,
  FaList,
  FaMessage,
  FaWallet,
} from "react-icons/fa6";




const D_Bord = () => {
  
  // for common user
  const common = (
    <div>
      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaHome></FaHome>

        <NavLink to="/DashBoard/UserHome">User Home</NavLink>
      </li>
      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaCalendar></FaCalendar>
        <NavLink to="/DashBoard/Reservation">Reservation</NavLink>
      </li>

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaWallet></FaWallet>
        <NavLink to="/DashBoard/PaymentHistory">Payment History</NavLink>
      </li>

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <MdBookmarkAdd />

        <NavLink to="/DashBoard/Cart">my Cart</NavLink>
      </li>

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaMessage></FaMessage>
        <NavLink to="/DashBoard/AddReview">Add Review</NavLink>
      </li>

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaList></FaList>

        <NavLink to="/DashBoard/Cart">my booking</NavLink>
      </li>
    </div>
  );

  //for admin user
  const admin = (
    <div>
      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaHome></FaHome>

        <NavLink to="/DashBoard/AdminHome">Admin Home</NavLink>
      </li>

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <ImSpoonKnife />
        <NavLink to="/DashBoard/addItems">add items</NavLink>
      </li>
      {/* <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
      <GrDocumentUpdate />
        <NavLink to="/DashBoard/UpdateItem">Update Item</NavLink>
      </li> */}

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <RiMenuFold2Line />
        <NavLink to="/DashBoard/manageItems">manage items</NavLink>
      </li>

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaBookmark />
        <NavLink to="/DashBoard/Managebookings">Manage bookings</NavLink>
      </li>

      <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
        <FaUsers />

        <NavLink to="/DashBoard/allUsers">all users</NavLink>
      </li>
    </div>
  );

  // todo: get isAdmin from Database
  const [isAdmin] = UseAdmin();
  // const isAdmin=false

  return (
    <div className="flex capitalize">
      {/* sidebar */}
      <div className="m-auto w-[20%] md:h-[800px]  bg-[#D1A054] p-5">
       
        <Link to="/">
          <img src={logo} alt=""  className="md:w-[300px] " />
        </Link>

        <ul className="space-y-2 capitalize">
          {isAdmin ? <>{admin}</> : <>{common}</>}

          {/*  */}

          <hr />
          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <FaHome></FaHome>
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <TiThMenu />
            <NavLink to="/OurMenu">Menu</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <FaShoppingCart></FaShoppingCart>

            <NavLink to="/OurShop">Shop</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <MdEmail />
            <NavLink to="/ContactUs">Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* sidebar end */}
      <div className="m-auto  flex-1 p-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default D_Bord;
