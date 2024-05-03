import "./sidebar.scss"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Search, SearchOffOutlined } from "@mui/icons-material";

const Sidebar =() => {
    return (
            <div className="sidebar">
    <div className="top">
        <Link to="/">
        <span className="logo">Store</span>
        </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
        <p className="title">MAIN</p>
        <li>
            <HomeIcon className="icon"/>
            <span>Dashboard</span>
        </li>
        <p className="title">LIST</p>
        <Link to="/users">
            <li>
            <PeopleAltIcon className="icon"/>
            <span>Users</span>
            </li>
        </Link>
        <Link to="/products">
            <li>
            <AddBoxIcon className="icon"/>
            <span>Products</span>
            </li>
        </Link>
        <li>
            <ShoppingCartIcon className="icon"/>
            <span>Orders</span>
        </li>
        <Link to="/categories">
            <li>
            <Search className="icon"/>
            <span>Categories</span>
            </li>
        </Link>
        <p className="title">USER</p>
        <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
        </li>
        <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
        </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
    </div>
    </div>
    )
}

export default Sidebar