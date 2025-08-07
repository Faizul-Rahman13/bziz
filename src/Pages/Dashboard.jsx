import React from "react";
import Bottom from "../Components/Bottom";
import { Link } from "react-router-dom";
function Dashboard(){

    return(

        <>
        <div class="dashboard-container mb-5">

        {/* <!-- Header --> */}

        <div class="dashboard-header">
            <h1 class="dashboard-title">Dashboard</h1>
            <Link to="/profile" >
            <div class="user-menu">
                <i class="fas fa-user"></i>
            </div>
            </Link>
        </div>

        {/* <!-- Stats Cards --> */}

        <div class="stats-container">
            <div class="stats-grid">
                <div class="stat-card primary">
                    <div class="stat-icon primary">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-title">Total Visitors</div>
                    <div class="stat-value">1,248</div>
                </div>

                <div class="stat-card success">
                    <div class="stat-icon success">
                        <i class="fas fa-question-circle"></i>
                    </div>
                    <div class="stat-title">Total Enquiries</div>
                    <div class="stat-value">86</div>
                </div>

                <div class="stat-card info">
                    <div class="stat-icon info">
                        <i class="fas fa-share-alt"></i>
                    </div>
                    <div class="stat-title">Total Shares</div>
                    <div class="stat-value">324</div>
                </div>

                <div class="stat-card warning">
                    <div class="stat-icon warning">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="stat-title">Locations Visited</div>
                    <div class="stat-value">18</div>
                </div>

                <div class="stat-card danger">
                    <div class="stat-icon danger">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="stat-title">My Clients</div>
                    <div class="stat-value">42</div>
                </div>

                <div class="stat-card primary">
                    <div class="stat-icon primary">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <div class="stat-title">My Meetings</div>
                    <div class="stat-value">15</div>
                </div>
            </div>

            {/* <!-- Recent Activity --> */}

            <div class="recent-activity">
                <h5 class="activity-title">Recent Activity</h5>

                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div class="activity-text">
                        <div class="activity-desc">New visitor from Bengaluru</div>
                        <div class="activity-time">10 minutes ago</div>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="fas fa-question"></i>
                    </div>
                    <div class="activity-text">
                        <div class="activity-desc">New enquiry about PLC systems</div>
                        <div class="activity-time">1 hour ago</div>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="fas fa-share"></i>
                    </div>
                    <div class="activity-text">
                        <div class="activity-desc">Profile shared on LinkedIn</div>
                        <div class="activity-time">3 hours ago</div>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="fas fa-user-plus"></i>
                    </div>
                    <div class="activity-text">
                        <div class="activity-desc">New client added</div>
                        <div class="activity-time">Yesterday</div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Bottom Navigation --> */}
        <Bottom/>
    </div>
        </>
    )
}

export default Dashboard