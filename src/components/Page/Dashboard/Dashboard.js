import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../_firebase_init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div class="drawer-side ">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-slate-400 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Item</Link></li>
                        <li><Link to='/dashboard/review'>Review</Link></li>
                        {
                            admin && <>
                                <li><Link to='/dashboard/alluser'>All User</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;