import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../_firebase_init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    const menu = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointments'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        {user ? <button className='btn bg-accent rounded-full text-white' onClick={handleSignOut}>Logout</button> : <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar-start  w-[270px]">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu items-center menu-compact dropdown-content w-[98vw] mt-3 p-2 shadow bg-base-100 text-[16px] rounded-box">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl md:text-3xl">Doctor Portals</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-[16px] menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <label for="dashboard-drawer" tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>

    );
};

export default Navbar;